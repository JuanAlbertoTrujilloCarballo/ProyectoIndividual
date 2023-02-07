package com.TCI.charlas.entity.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanArrayDataSource;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IEventDao;
import com.TCI.charlas.entity.dao.ISpeakerDao;
import com.TCI.charlas.entity.dao.IUserDao;
import com.TCI.charlas.entity.models.Event;
import org.springframework.util.ResourceUtils;

import javax.validation.constraints.NotNull;


@Service
public class EventService implements IEventService {

    @Autowired
    private IEventDao eventDao;

    @Autowired
    private ISpeakerDao speakerDao;

    @Autowired
    private IUserDao userDao;

    @Override
    public Event get(long id) {
        return eventDao.findById(id).get();
    }

    @Override
    public List<Event> getAll() {
        return (List<Event>) eventDao.findAll();

    }

    @Override
    public void post(Event event) {
        eventDao.save(event);
    }

    @Override
    public void put(Event event, long id) {
        eventDao.findById(id).ifPresent((x) -> {
            event.setId(id);
            if (event.getImage() == null) {
                event.setImage(x.getImage());
                event.setNameImg(x.getNameImg());
                event.setTypeImg(x.getTypeImg());
            }
            eventDao.save(event);
        });
    }

    @Override
    public void delete(long id) {
        eventDao.deleteById(id);
    }

    @Override
    public void addSpeakerToEvent(long idSpeaker, long idEvent) {
        eventDao.findById(idEvent).ifPresent((x) -> {
            speakerDao.findById(idSpeaker).ifPresent((y) -> {
                x.setSpeaker(y);
                eventDao.save(x);
            });
        });
    }

    @Override
    public void addUserToEvent(long idUser, long idEvent) {
        eventDao.findById(idEvent).ifPresent((x) -> {
            userDao.findById(idUser).ifPresent((y) -> {
                x.getAttendance().add(y);
                eventDao.save(x);
            });
        });
    }

    @Override
    public List<Event> getAllEvents() {
        return (List<Event>) eventDao.findAll();
    }

    @Override
    public void deleteUserFromEvent(long idUser, long idEvent) {
        eventDao.findById(idEvent).ifPresent((x) -> {
            userDao.findById(idUser).ifPresent((y) -> {
                x.getAttendance().remove(y);
                eventDao.save(x);
            });
        });
    }

    @NotNull
    public ResponseEntity<Resource> exportInvoice(int idEvent, String location) {
        Optional<Event> optEvent = this.eventDao.findById(idEvent);
        Double rpta = this.eventDao.totalByLocation(location);
        if (optEvent.isPresent()) {
            try {
                final Event event = optEvent.get();
                final File file = ResourceUtils.getFile("classpath:exportInvoice.jasper");
                final JasperReport report = (JasperReport) JRLoader.loadObject(file);

                final HashMap<String, Object> parameters = new HashMap<>();
                parameters.put("total", rpta);
                parameters.put("dsInvoice", new JRBeanCollectionDataSource((Collection<?>) this.eventDao.findByLocation(event.getLocation())));

                JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());
                byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
                String sdf = (new SimpleDateFormat("dd/mm/yyyy")).format(new Date());
                StringBuilder stringBuilder = new StringBuilder().append("InvoicePDF:");
                ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                        .filename(stringBuilder.append(event.getId())
                                .append("generateDate:")
                                .append(sdf)
                                .append(".pdf")
                                .toString())
                        .build();
                HttpHeaders headers = new HttpHeaders();
                headers.setContentDisposition(contentDisposition);
                return ResponseEntity.ok().contentLength((long) reporte.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .headers(headers).body(new ByteArrayResource(reporte));
            } catch (Exception e) {
                e.printStackTrace();
                throw new RuntimeException(e);
            }

        } else {
            return ResponseEntity.noContent().build(); //No se encontró reporte
        }

    }

}

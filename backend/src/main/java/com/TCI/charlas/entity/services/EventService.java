package com.TCI.charlas.entity.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IAppUserDao;
import com.TCI.charlas.entity.dao.IEventDao;
import com.TCI.charlas.entity.dao.ISpeakerDao;
import com.TCI.charlas.entity.models.AppUser;
import com.TCI.charlas.entity.models.Event;


@Service
public class EventService implements IEventService {

  @Autowired
  private IEventDao eventDao;
  
  @Autowired
  private ISpeakerDao speakerDao;
  
  @Autowired
  private IAppUserDao appUserDao;

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
  public void addAppUserToEvent(long idAppUser, long idEvent) {
    eventDao.findById(idEvent).ifPresent((x) -> {
      appUserDao.findById(idAppUser).ifPresent((y) -> {
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
  public void deleteAppUserFromEvent(long idAppUser, long idEvent) {
    eventDao.findById(idEvent).ifPresent((x) -> {
      appUserDao.findById(idAppUser).ifPresent((y) -> {
        x.getAttendance().remove(y);
        eventDao.save(x);
      });
    });
  }
  
}

package com.TCI.charlas.controllers;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.services.IEventService;
import com.TCI.charlas.utils.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class EventController {

  @Autowired
  IEventService eventService;

  @GetMapping("/event")
  public List<Event> getAllEvents() {
    List<Event> db = eventService.getAll();
    db.forEach((x) -> {
      if (x.getImage() != null){
        byte[] noZip = ImageUtility.decompressImage(x.getImage());
      x.setImage(noZip);
      }
    });
    return db;
  }

  @GetMapping("/event/{id}")
  public Event getOne(@PathVariable(value = "id") long id) {
    final Event db = eventService.get(id);
    if (db.getImage() != null) {
      return Event.builder()
              .nameImg(db.getNameImg())
              .typeImg(db.getTypeImg())
              .image(ImageUtility.decompressImage(db.getImage()))
              .initialHour(db.getInitialHour())
              .finalHour(db.getFinalHour())
              .description(db.getDescription())
              .title(db.getTitle())
              .location(db.getLocation())
              .speaker(db.getSpeaker())
              .attendance(db.getAttendance())
              .id(db.getId())
              .build();
    } else {
      return Event.builder()
              .initialHour(db.getInitialHour())
              .finalHour(db.getFinalHour())
              .description(db.getDescription())
              .title(db.getTitle())
              .location(db.getLocation())
              .speaker(db.getSpeaker())
              .attendance(db.getAttendance())
              .id(db.getId())
              .build();
    }

  }

  @PostMapping("/event")
  public void post(Event event, @RequestParam(value = "file", required = false) MultipartFile image) throws IOException {
    if (image != null) {
      String randomID = UUID.randomUUID().toString();
      String filename = randomID.concat(randomID + image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf(".")));

      event.setNameImg(filename);
      event.setTypeImg(image.getContentType());
      event.setImage(ImageUtility.compressImage(image.getBytes()));
    }

    eventService.post(event);
  }

  
  @PostMapping("/event/{idEvent}/speaker/{idSpeaker}")
  public void addSpeakerToEvent(@PathVariable(value = "idSpeaker") long idSpeaker, @PathVariable(value = "idEvent") long idEvent) {
    eventService.addSpeakerToEvent(idSpeaker, idEvent);
  }
  
  @PostMapping("/event/{idEvent}/user/{idUser}")
  public void addUserToEvent(@PathVariable(value = "idUser") long idUser, @PathVariable(value = "idEvent") long idEvent) {
    eventService.addUserToEvent(idUser, idEvent);
  }

  @DeleteMapping("/event/{idEvent}/user/{idUser}")
  public void deleteUserFromEvent(@PathVariable(value = "idUser") long idUser, @PathVariable(value = "idEvent") long idEvent) {
    eventService.deleteUserFromEvent(idUser, idEvent);
  }
 
  @PutMapping("/editEvent/{id}")
  public void put(Event event, @PathVariable(value = "id") long id, @RequestParam(value = "file", required = false) MultipartFile image) throws IOException {

    eventService.put(event, id);
  }


  @DeleteMapping("/event/{id}")
  public void delete(@PathVariable(value = "id") long id) throws IOException{
    eventService.delete(id);
  }
   
  
 
}

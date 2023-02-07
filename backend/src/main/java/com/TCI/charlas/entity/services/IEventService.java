package com.TCI.charlas.entity.services;

import java.io.IOException;
import java.util.List;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.Speaker;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

public interface IEventService {

  //public Event insertEvent(Event obj);
  
  public Event get(long id);
  public List<Event> getAll();
  public void post(Event event);
  public void put(Event event, long id);
  public void delete(long id);
  
  public List<Event> getAllEvents();
  public void addSpeakerToEvent(long idSpeaker, long idEvent);
  public void addUserToEvent(long idUser, long idEvent);
  public void deleteUserFromEvent(long idUser, long idEvent);

  ResponseEntity<Resource> exportInvoice(int idEvent, String location);
}

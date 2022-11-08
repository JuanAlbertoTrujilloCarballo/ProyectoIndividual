package com.TCI.charlas.entity.services;

import java.util.List;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.Speaker;

public interface IEventService {

  //public Event insertEvent(Event obj);
  
  public Event get(long id);
  public List<Event> getAll();
  public void post(Event event);
  public void put(Event event, long id);
  public void delete(long id);
  
  public List<Event> getAllEvents();
  public void addSpeakerToEvent(long idSpeaker, long idEvent);
  public void addAppUserToEvent(long idAppUser, long idEvent);
  public void deleteAppUserFromEvent(long idAppUser, long idEvent);
  
  
}

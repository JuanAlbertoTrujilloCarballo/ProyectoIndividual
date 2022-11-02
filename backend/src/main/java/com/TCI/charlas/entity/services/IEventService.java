package com.TCI.charlas.entity.services;

import java.util.List;

import com.TCI.charlas.entity.models.Event;

public interface IEventService {

  public Event get(long id);
  public List<Event> getAll();
  public void post(Event event);
  public void put(Event event, long id);
  public void delete(long id);

}

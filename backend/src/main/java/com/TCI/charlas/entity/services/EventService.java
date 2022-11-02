package com.TCI.charlas.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IEventDao;
import com.TCI.charlas.entity.models.Event;

@Service
public class EventService  implements IEventService {

  @Autowired
  private IEventDao eventDao;

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

}

package com.TCI.charlas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.Speaker;
import com.TCI.charlas.entity.services.IEventService;
import com.TCI.charlas.entity.services.ISpeakerService;

@RestController
@CrossOrigin(origins="*")
public class EventController {

  @Autowired
  IEventService eventService;
  
  
  @GetMapping("/event")
  public List<Event> getAllEvents(){
      return eventService.getAll();
 }
  @GetMapping("/event/{id}")
  public Event getOne ( @PathVariable ( value = "id" ) long id ) {
      return eventService.get (id) ;
  }
  @PostMapping ("/event")
  public void post(Event event) {
    eventService.post(event) ;
  }
  @PutMapping("/event/{id}")
  public void put(Event event, @PathVariable(value = "id") long id) {
    eventService.put(event, id);
 }
  @DeleteMapping ("/event/{id}")
  public void delete(@PathVariable(value = "id") long id) {
    eventService.delete(id);
  }
}
  


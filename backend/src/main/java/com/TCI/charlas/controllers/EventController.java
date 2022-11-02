package com.TCI.charlas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.Speaker;
import com.TCI.charlas.entity.services.IEventService;
import com.TCI.charlas.entity.services.ISpeakerService;
import com.TCI.charlas.entity.services.SpeakerService;

@RestController
@CrossOrigin(origins = "*")
public class EventController {

  @Autowired
  IEventService eventService;

  @Autowired
  private ISpeakerService speakerService;

  @GetMapping("/event")
  public List<Event> getAllEvents() {
    return eventService.getAll();
  }

  @GetMapping("/event/{id}")
  public Event getOne(@PathVariable(value = "id") long id) {
    return eventService.get(id);
  }

  @PostMapping("/event")
  public void post(Event event) {
    eventService.post(event);
  }

  @PostMapping("/event/{idEvent}/speaker/{idSpeaker}")
  public void addSpeakerToEvent(@PathVariable(value = "idSpeaker") long idSpeaker, @PathVariable(value = "idEvent") long idEvent) {
    eventService.addSpeakerToEvent(idSpeaker, idEvent);
  }

  @PutMapping("/event/{id}")
  public void put(Event event, @PathVariable(value = "id") long id) {
    eventService.put(event, id);
  }

  @DeleteMapping("/event/{id}")
  public void delete(@PathVariable(value = "id") long id) {
    eventService.delete(id);
  }

  @RequestMapping("/speakerList")
  @ResponseBody
  public List<Speaker> speakerList() {
    return speakerService.getAll();
  }
}
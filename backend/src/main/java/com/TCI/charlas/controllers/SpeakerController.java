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

import com.TCI.charlas.entity.models.Speaker;
import com.TCI.charlas.entity.services.ISpeakerService;

@RestController
@CrossOrigin(origins="*")
public class SpeakerController {

  @Autowired
  ISpeakerService speakerService;
  
  
  @GetMapping("/speaker")
  public List<Speaker> getAll(){
      return speakerService.getAll();
 }
  @GetMapping("/speaker/{id}")
  public Speaker getOne ( @PathVariable ( value = "id" ) long id ) {
      return speakerService.get (id) ;
  }
  @PostMapping ("/speaker")
  public void post(Speaker speaker) {
      speakerService.post(speaker) ;
  }
  @PutMapping("/speaker/{id}")
  public void put(Speaker speaker, @PathVariable(value = "id") long id) {
      speakerService.put(speaker, id);
 }
  @DeleteMapping ("/speaker/{id}")
  public void delete(@PathVariable(value = "id") long id) {
      speakerService.delete(id);
  }
}
  


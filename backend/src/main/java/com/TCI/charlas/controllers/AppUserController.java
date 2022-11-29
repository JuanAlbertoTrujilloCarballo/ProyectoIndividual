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


import com.TCI.charlas.entity.models.AppUser;
import com.TCI.charlas.entity.services.IAppUserService;

@RestController
@CrossOrigin(origins="*")
public class AppUserController {

  @Autowired
  IAppUserService appuserService;
  
  @GetMapping("/appuser")
  public List<AppUser> getAll(){
      return appuserService.getAll();
 }
  @GetMapping("/appuser/{id}")
  public AppUser getOne ( @PathVariable ( value = "id" ) long id ) {
      return appuserService.get (id) ;
  }
  @PostMapping ("/appuser")
  public void post(AppUser appuser) {
    appuserService.post(appuser) ;
  }
  @PutMapping("/appuser/{id}")
  public void put(AppUser appuser, @PathVariable(value = "id") long id) {
    appuserService.put(appuser, id);
 }
  @DeleteMapping ("/appuser/{id}")
  public void delete(@PathVariable(value = "id") long id) {
    appuserService.delete(id);
  }
  
  @GetMapping("/appuser/event/{id}")
  private List<AppUser> getUsersInEvent(@PathVariable(value = "id") long id){
      return appuserService.getAllUsersInEvent(id);
  }
}

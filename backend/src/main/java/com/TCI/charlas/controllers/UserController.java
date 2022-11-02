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

import com.TCI.charlas.entity.models.User;
import com.TCI.charlas.entity.services.IUserService;

@RestController
@CrossOrigin(origins="*")
public class UserController {

  @Autowired
  IUserService userService;
  
  
  @GetMapping("/user")
  public List<User> getAll(){
      return userService.getAll();
 }
  @GetMapping("/user/{id}")
  public User getOne ( @PathVariable ( value = "id" ) long id ) {
      return userService.get (id) ;
  }
  @PostMapping ("/user")
  public void post(User user) {
    userService.post(user) ;
  }
  @PutMapping("/user/{id}")
  public void put(User user, @PathVariable(value = "id") long id) {
    userService.put(user, id);
 }
  @DeleteMapping ("/user/{id}")
  public void delete(@PathVariable(value = "id") long id) {
    userService.delete(id);
  }
  
  @GetMapping("/user/event/{id}")
  private List<User> getUsersInEvent(@PathVariable(value = "id") String id){
      return userService.getAllUsersInEvent(id);
  }
}

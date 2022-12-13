package com.TCI.charlas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TCI.charlas.entity.models.User;
import com.TCI.charlas.entity.services.IUserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
  
  @Autowired
  IUserService userService;
  
  @Autowired
  PasswordEncoder encoder;
  
  @GetMapping("/user/{id}")
  public User getOne(@PathVariable(value = "id") Long id) {
      return userService.get(id);
  }
  
  @PutMapping("/user/{id}")
  public void put(User user, @PathVariable(value = "id") long id) {
    
    String encryptPw = encoder.encode(user.getPassword());
    user.setPassword(encryptPw);
    user.setRoles(getOne(id).getRoles());
    System.out.println(user);
    userService.put(user, id);
 }
  @DeleteMapping ("/user/{id}")
  public void delete(@PathVariable(value = "id") long id) {
    userService.delete(id);
  }
}

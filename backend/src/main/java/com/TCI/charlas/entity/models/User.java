package com.TCI.charlas.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
//@Table(name="users")
public class User implements Serializable{
  
  private static final long serialVersionUID = 1L;
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  
  private String name;
  
  private String username;
  
  private String email;
  
  private String dni;
  
  private int age;
  
  private int phone;

  
  @JsonIgnore
  @ManyToMany(mappedBy = "usersInEvent")
  Set<Event> eventsWhereTofindThisUser = new HashSet<>();



  public long getId() {
    return id;
  }


  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public String getUsername() {
    return username;
  }


  public void setUsername(String username) {
    this.username = username;
  }


  public String getEmail() {
    return email;
  }


  public void setEmail(String email) {
    this.email = email;
  }


  public String getDni() {
    return dni;
  }


  public void setDni(String dni) {
    this.dni = dni;
  }


  public int getAge() {
    return age;
  }


  public void setAge(int age) {
    this.age = age;
  }


  public int getPhone() {
    return phone;
  }


  public void setPhone(int phone) {
    this.phone = phone;
  }


  public Set<Event> getEventsWhereTofindThisUser() {
    return eventsWhereTofindThisUser;
  }


  public void setEventsWhereTofindThisUser(Set<Event> eventsWhereTofindThisUser) {
    this.eventsWhereTofindThisUser = eventsWhereTofindThisUser;
  }


  public User(String name, String username, String email, String dni, int age, int phone) {
    super();
    this.name = name;
    this.username = username;
    this.email = email;
    this.dni = dni;
    this.age = age;
    this.phone = phone;
  }


  public User() {
    super();
  }




  

}

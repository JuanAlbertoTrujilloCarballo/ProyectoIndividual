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
//@Table(name="user")
public class AppUser implements Serializable{

  private static final long serialVersionUID = 1L;
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  
  private String dni;
  
  private String name;
  
  private String username;
  
  private String password;
  
  private int age;
  
  private int phone;
  
  private String email;
  
  @JsonIgnore
  @ManyToMany(mappedBy = "attendance")
  Set<Event> eventsWhereTofindThisUser = new HashSet<>();

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getDni() {
    return dni;
  }

  public void setDni(String dni) {
    this.dni = dni;
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
  
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Set<Event> getEventsWhereTofindThisUser() {
    return eventsWhereTofindThisUser;
  }

  public void setEventsWhereTofindThisUser(Set<Event> eventsWhereTofindThisUser) {
    this.eventsWhereTofindThisUser = eventsWhereTofindThisUser;
  }

  public AppUser(String dni, String name, String username, int age, int phone, String email) {
    super();
    this.dni = dni;
    this.name = name;
    this.username = username;
    this.age = age;
    this.phone = phone;
    this.email = email;
  }

  public AppUser() {
    super();
  }
  
  
 
}

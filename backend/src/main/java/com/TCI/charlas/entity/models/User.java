package com.TCI.charlas.entity.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.TCI.charlas.entity.dao.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  private String dni;
  
  @NotBlank
  private String name;
  
  @NotBlank
  private String username;
  
  @NotBlank
  private String password;
  
  private int age;

  private int phone;
  
  @NotBlank
  private String email;
  
  @JsonIgnore
  @ManyToMany(mappedBy = "attendance")
  Set<Event> eventsWhereTofindThisUser = new HashSet<>();

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  public User() {
  }

  public User(String dni, String name, String username, int age, int phone, String email, String password) {
    super();
    this.dni = dni;
    this.name = name;
    this.username = username;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
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

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }
}
package com.TCI.charlas.entity.models;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
//@Table(name="event")
public class Event implements Serializable{
  
  private static final long serialVersionUID = 1L;
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  
  private String location;
  
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime initialHour;
  
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime finalHour;
  
  private String title;
  
  private String description;
  
  private String tags;

  
  @JsonIgnore
  @ManyToOne
  //@ManyToOne(fetch = FetchType.LAZY)
  //@ManyToOne(fetch = FetchType.EAGER)
  private Speaker speaker;
  
  @JsonIgnore
  @ManyToMany
  @JoinTable(name = "users_in_event",
          joinColumns = @JoinColumn(name = "event_id"),
          inverseJoinColumns = @JoinColumn(name = "users_id"))
  private Set<User> usersInEvent = new HashSet<>();


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public LocalDateTime getInitialHour() {
    return initialHour;
  }

  public void setInitialHour(LocalDateTime initialHour) {
    this.initialHour = initialHour;
  }

  public LocalDateTime getFinalHour() {
    return finalHour;
  }

  public void setFinalHour(LocalDateTime finalHour) {
    this.finalHour = finalHour;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getTags() {
    return tags;
  }

  public void setTags(String tags) {
    this.tags = tags;
  }

  public Event(String location, LocalDateTime initialHour, LocalDateTime finalHour, String title, String description,
      String tags) {
    super();
    this.location = location;
    this.initialHour = initialHour;
    this.finalHour = finalHour;
    this.title = title;
    this.description = description;
    this.tags = tags;
  }

  public Event() {
    super();
  }

  public Speaker getSpeaker() {
    return speaker;
  }

  public void setSpeaker(Speaker speaker) {
    this.speaker = speaker;
  }
  
  public Set<User> getUsersInEvent() {
    return usersInEvent;
  }

  public void setUsersInEvent(Set<User> usersInEvent) {
    this.usersInEvent = usersInEvent;
  }

}
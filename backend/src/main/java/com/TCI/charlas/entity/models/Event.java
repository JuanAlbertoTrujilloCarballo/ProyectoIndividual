package com.TCI.charlas.entity.models;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Table(name="event")
public class Event implements Serializable {

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

  private String nameImg;

  private String typeImg;

  @Column(name = "image", unique = false, length = 100000)
  private byte[] image;

  @ManyToOne
  private Speaker speaker;

  @ManyToMany
  @JoinTable(name = "attendance",
          joinColumns = @JoinColumn(name = "event_id"),
          inverseJoinColumns = @JoinColumn(name = "user_id"))
  private Set<User> attendance = new HashSet<>();

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

  public String getNameImg() {
    return nameImg;
  }

  public void setNameImg(String nameImg) {
    this.nameImg = nameImg;
  }

  public String getTypeImg() {
    return typeImg;
  }

  public void setTypeImg(String typeImg) {
    this.typeImg = typeImg;
  }

  public byte[] getImage() {
    return image;
  }

  public void setImage(byte[] image) {
    this.image = image;
  }

  public Speaker getSpeaker() {
    return speaker;
  }

  public void setSpeaker(Speaker speaker) {
    this.speaker = speaker;
  }

  public Set<User> getAttendance() {
    return attendance;
  }

  public void setAttendance(Set<User> attendance) {
    this.attendance = attendance;
  }
}
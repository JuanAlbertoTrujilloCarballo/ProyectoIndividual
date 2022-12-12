package com.TCI.charlas.payload.request;

import java.util.Set;

import javax.validation.constraints.*;

public class SignupRequest {
  
  private Set<String> role;
  
  
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}
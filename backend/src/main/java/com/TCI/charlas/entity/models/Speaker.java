package com.TCI.charlas.entity.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="speaker")
public class Speaker implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idSpeaker;
    
    private String dni;
    
    private String name;
    
    private String email;
    
     private int phone;
  
     //@OneToMany(mappedBy = "id")
     //private List<Event> event;

     
     public long getIdSpeaker() {
       return idSpeaker;
     }




     public void setIdSpeaker(long idSpeaker) {
       this.idSpeaker = idSpeaker;
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




    public String getEmail() {
      return email;
    }




    public void setEmail(String email) {
      this.email = email;
    }




    public int getPhone() {
      return phone;
    }




    public void setPhone(int phone) {
      this.phone = phone;
    }




    public Speaker(long idSpeaker, String dni, String name, String email, int phone) {
      super();
      this.idSpeaker = idSpeaker;
      this.dni = dni;
      this.name = name;
      this.email = email;
      this.phone = phone;
    }





    public Speaker() {
      super();
    }



}

package com.TCI.charlas.entity.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.TCI.charlas.entity.models.Event;
//import com.TCI.charlas.entity.models.User;

public interface IEventDao extends CrudRepository<Event, Long>{

  //@Query("SELECT s.usersInEvent FROM Event s WHERE s.id = :id")
  //public List<User> findAllUsersByEventId(@Param("id") String id);
  
}

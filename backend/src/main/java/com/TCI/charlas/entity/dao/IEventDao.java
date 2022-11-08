package com.TCI.charlas.entity.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.AppUser;

public interface IEventDao extends CrudRepository<Event, Long>{

  @Query("SELECT s.attendance FROM Event s WHERE s.id = :id")
  public List<AppUser> findAllUsersByEventId(@Param("id") long id);
  
  Optional<Event> findByName(String title);
  
}

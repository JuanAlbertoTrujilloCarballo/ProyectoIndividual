package com.TCI.charlas.entity.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.TCI.charlas.entity.models.Event;
import com.TCI.charlas.entity.models.User;

public interface IEventDao extends CrudRepository<Event, Long>{

  @Query("SELECT s.attendance FROM Event s WHERE s.id = :id")
  public List<User> findAllUsersByEventId(@Param("id") long id);
  @Query(value="SELECT * FROM Event WHERE Event.id=:idEvent ", nativeQuery = true)
  Optional<Event> findById(int idEvent);
  @Query(value="SELECT * FROM Event WHERE Event.location=:location ", nativeQuery = true)
  Iterable<Event> findByLocation(String location);
  @Query(value = "SELECT COUNT(location) FROM charlas_itc.event WHERE location=:location", nativeQuery = true)
  Double totalByLocation(String location);
}

package com.TCI.charlas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.TCI.charlas.entity.models.Event;

public interface IEventDao extends CrudRepository<Event, Long>{

}

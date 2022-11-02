package com.TCI.charlas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.TCI.charlas.entity.models.Speaker;

public interface ISpeakerDao extends CrudRepository<Speaker, Long>{

}

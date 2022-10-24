package com.TCI.charlas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.TCI.charlas.entity.models.Monster;

public interface IMonsterDao extends CrudRepository<Monster, Long>{

}

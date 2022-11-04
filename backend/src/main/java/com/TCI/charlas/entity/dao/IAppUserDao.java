package com.TCI.charlas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.TCI.charlas.entity.models.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long>{

}

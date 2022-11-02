package com.TCI.charlas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.TCI.charlas.entity.models.User;

public interface IUserDao extends CrudRepository<User, Long>{

}

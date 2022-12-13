package com.TCI.charlas.entity.services;

import com.TCI.charlas.entity.models.User;

public interface IUserService {

  public User get(long id);
  public void put(User user, long id);
  public void delete(long id);
 
}

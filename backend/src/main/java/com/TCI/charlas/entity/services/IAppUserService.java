package com.TCI.charlas.entity.services;

import java.util.List;

import com.TCI.charlas.entity.models.AppUser;

public interface IAppUserService {

  public AppUser get(long id);
  public List<AppUser> getAll();
  public void post(AppUser appUser);
  public void put(AppUser appUser, long id);
  public void delete(long id);
  
  public List<AppUser> getAllUsersInEvent(long id);
}

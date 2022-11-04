package com.TCI.charlas.entity.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IEventDao;
import com.TCI.charlas.entity.dao.IAppUserDao;
import com.TCI.charlas.entity.models.AppUser;
@Service
public class AppUserService implements IAppUserService{

  @Autowired
  private IAppUserDao appUserDao;
  
  @Autowired
  private IEventDao eventDao;
  
  @Override
  public AppUser get(long id) {
    return appUserDao.findById(id).get();
  }

  @Override
  public List<AppUser> getAll() {
    return (List<AppUser>) appUserDao.findAll();

  }

  @Override
  public void post(AppUser appUser) {
    appUserDao.save(appUser);
  }

  @Override
  public void put(AppUser appUser, long id) {
    appUserDao.findById(id).ifPresent((x) -> {
      appUser.setId(id);
      appUserDao.save(appUser);
    });
  }

  @Override
  public void delete(long id) {
    appUserDao.deleteById(id);
  }
  
  @Override
  public List<AppUser> getAllUsersInEvent(long id) {
      return eventDao.findAllUsersByEventId(id);
  }

  
}

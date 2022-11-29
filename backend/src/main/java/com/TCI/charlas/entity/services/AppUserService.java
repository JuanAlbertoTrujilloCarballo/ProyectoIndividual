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
  private IAppUserDao appuserDao;
  
  @Autowired
  private IEventDao eventDao;
  
  @Override
  public AppUser get(long id) {
    return appuserDao.findById(id).get();
  }

  @Override
  public List<AppUser> getAll() {
    return (List<AppUser>) appuserDao.findAll();

  }

  @Override
  public void post(AppUser appuser) {
    appuserDao.save(appuser);
  }

  @Override
  public void put(AppUser appuser, long id) {
    appuserDao.findById(id).ifPresent((x) -> {
      appuser.setId(id);
      appuserDao.save(appuser);
    });
  }

  @Override
  public void delete(long id) {
    appuserDao.deleteById(id);
  }
  
  @Override
  public List<AppUser> getAllUsersInEvent(long id) {
      return eventDao.findAllUsersByEventId(id);
  }

  
}

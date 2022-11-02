package com.TCI.charlas.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.TCI.charlas.entity.dao.IEventDao;
import com.TCI.charlas.entity.dao.IUserDao;
import com.TCI.charlas.entity.models.User;

public class UserService implements IUserService{

  @Autowired
  private IUserDao userDao;
  
  @Autowired
  private IEventDao eventDao;

  @Override
  public User get(long id) {
    return userDao.findById(id).get();
  }

  @Override
  public List<User> getAll() {
    return (List<User>) userDao.findAll();

  }

  @Override
  public void post(User user) {
    userDao.save(user);
  }

  @Override
  public void put(User user, long id) {
    userDao.findById(id).ifPresent((x) -> {
      user.setId(id);
      userDao.save(user);
    });
  }

  public void delete(long id) {
    userDao.deleteById(id);
  }

  @Override
  public List<User> getAllUsersInEvent(String id) {
    return eventDao.findAllUsersByEventId(id);
  }
}

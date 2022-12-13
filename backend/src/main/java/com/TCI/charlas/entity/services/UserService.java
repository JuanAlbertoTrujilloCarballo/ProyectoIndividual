package com.TCI.charlas.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IUserDao;
import com.TCI.charlas.entity.models.User;

@Service
public class UserService implements IUserService{

  @Autowired
  private IUserDao userDao;

  @Override
  public User get(long id) {
      return userDao.findById(id).get();
  }
  
  @Override
  public void put(User user, long id) {
    userDao.findById(id).ifPresent((x) -> {
      user.setId(id);
          userDao.save(user);
      });
  }

  @Override
  public void delete(long id) {
    userDao.deleteById(id);
  }
  
}

package com.TCI.charlas.entity.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.TCI.charlas.entity.models.User;

public interface IUserDao extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}

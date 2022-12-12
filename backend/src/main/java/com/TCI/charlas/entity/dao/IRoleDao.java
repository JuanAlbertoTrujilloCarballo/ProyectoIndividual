package com.TCI.charlas.entity.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.TCI.charlas.entity.models.ERole;

public interface IRoleDao extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}

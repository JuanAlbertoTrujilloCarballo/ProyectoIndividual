package com.TCI.charlas.entity.services;

import java.util.List;

import com.TCI.charlas.entity.models.Monster;


public interface IMonsterService {

	public Monster get(long id);
	public List<Monster> getAll();
	public void post(Monster monster);
	public void put(Monster monster, long id);
	public void delete(long id);

}

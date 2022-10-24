package com.TCI.charlas.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.IMonsterDao;
import com.TCI.charlas.entity.models.Monster;

@Service
public class MonsterService implements IMonsterService {

	@Autowired
	private IMonsterDao montserDao;

	@Override
	public Monster get(long id) {
		return montserDao.findById(id).get();
	}

	@Override
	public List<Monster> getAll() {
		return (List<Monster>) montserDao.findAll();

	}

	@Override
	public void post(Monster monster) {
		montserDao.save(monster);
	}

	@Override
	public void put(Monster monster, long id) {
		montserDao.findById(id).ifPresent((x) -> {
			monster.setId(id);
			montserDao.save(monster);
		});
	}

	@Override
	public void delete(long id) {
		montserDao.deleteById(id);
	}

}

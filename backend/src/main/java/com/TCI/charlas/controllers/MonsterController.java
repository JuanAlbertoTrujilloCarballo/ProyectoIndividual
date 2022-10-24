package com.TCI.charlas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TCI.charlas.entity.models.Monster;
import com.TCI.charlas.entity.services.IMonsterService;

@RestController
@CrossOrigin(origins="*")
public class MonsterController {
		
	    @Autowired
	    IMonsterService monsterService;
	    
	    
	    @GetMapping("/monsters")
	    public List<Monster> getAllMonsters(){
	        return monsterService.getAll();
	   }
	    @GetMapping("/monsters/{id}")
	    public Monster getOne ( @PathVariable ( value = "id" ) long id ) {
	        return monsterService.get (id) ;
	    }
	    @PostMapping ("/monsters")
	    public void post(Monster monster) {
	    	monsterService.post(monster) ;
	    }
	    @PutMapping("/monsters/{id}")
	    public void put(Monster monster, @PathVariable(value = "id") long id) {
	    	monsterService.put(monster, id);
	   }
	    @DeleteMapping ("/monsters/{id}")
	    public void delete(@PathVariable(value = "id") long id) {
	    	monsterService.delete(id);
	    }
	}
	

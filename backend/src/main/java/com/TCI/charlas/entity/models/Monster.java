package com.TCI.charlas.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="monsters")
public class Monster implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private String title;
	
	private String weakness;
	
	//  /*
	 private String url;
	 

	public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
  
  //  */

  public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getWeakness() {
		return weakness;
	}

	public void setWeakness(String weakness) {
		this.weakness = weakness;
	}

	public Monster(String name, String title, String weakness) {
		super();
		this.name = name;
		this.title = title;
		this.weakness = weakness;
	}

	public Monster() {
		
	}

}

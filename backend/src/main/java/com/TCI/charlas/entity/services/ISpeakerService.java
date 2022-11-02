package com.TCI.charlas.entity.services;

import java.util.List;

import com.TCI.charlas.entity.models.Speaker;

public interface ISpeakerService {
  
  public Speaker get(long id);
  public List<Speaker> getAll();
  public void post(Speaker speaker);
  public void put(Speaker speaker, long id);
  public void delete(long id);
 

}

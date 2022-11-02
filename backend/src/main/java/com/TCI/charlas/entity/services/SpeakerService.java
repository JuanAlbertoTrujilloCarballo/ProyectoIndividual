package com.TCI.charlas.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TCI.charlas.entity.dao.ISpeakerDao;
import com.TCI.charlas.entity.models.Speaker;

@Service
public class SpeakerService  implements ISpeakerService {

  @Autowired
  private ISpeakerDao speakerDao;

  @Override
  public Speaker get(long id) {
      return speakerDao.findById(id).get();
  }

  @Override
  public List<Speaker> getAll() {
      return (List<Speaker>) speakerDao.findAll();

  }

  @Override
  public void post(Speaker speaker) {
    speakerDao.save(speaker);
  }

  @Override
  public void put(Speaker speaker, long id) {
    speakerDao.findById(id).ifPresent((x) -> {
          speaker.setIdSpeaker(id);
          speakerDao.save(speaker);
      });
  }

  @Override
  public void delete(long id) {
    speakerDao.deleteById(id);
  }

}

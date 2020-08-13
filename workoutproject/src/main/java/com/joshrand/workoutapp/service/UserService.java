package com.joshrand.workoutapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.joshrand.workoutapp.model.User;



@Service
public interface UserService
{

	public void findUserById(int id);
	void addUser(User user);
	boolean userExists(String name);
	public User findUserByName(String userName);
	public List<User> findAll();
}

package com.joshrand.workoutapp.repo;

import org.springframework.data.repository.CrudRepository;

import com.joshrand.workoutapp.model.User;

public interface UserRepo extends CrudRepository<User, Integer>
{
	public User findByUserName(String userName);
}

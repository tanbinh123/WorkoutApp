package com.joshrand.workoutapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.joshrand.workoutapp.model.User;
import com.joshrand.workoutapp.repo.UserRepo;


@Service
public class LoginService {
	
	@Autowired
	UserService userService;
	
	public boolean validateUser(String userid, String password) {
 		List<User> list = userService.findAll();
		
 		for (User user : list)
		{
			if(userid.equals(user.getuName()) && password.equals(user.getPassword()))
			{
				return true;
			}
		}
		
		return false;
	}

}

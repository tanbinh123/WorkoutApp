package com.joshrand.workoutapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.joshrand.workoutapp.model.User;
import com.joshrand.workoutapp.repo.UserRepo;

public class UserServiceImpl implements UserService

{


		@Autowired
		private UserRepo userRepo;
		
		@Override
		public void findUserById(int id)
		{
			
			
			// TODO Auto-generated method stub
			
		}

		@Override
		public void addUser(User user)
		{
			userRepo.save(user);
			// TODO Auto-generated method stub
			
		}

		@Override
		public boolean userExists(String name)
		{
			List<User> list = (List<User>)userRepo.findAll();
			for (User user : list)
			{
				if(user.getuName().equals(name))
				{
					return true;
				}
			}
			
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public User findUserByName(String userName)
		{
			//User user = userRepo.currentUser(userName);
			// TODO Auto-generated method stub
			
			
			return null;
		}

	

}

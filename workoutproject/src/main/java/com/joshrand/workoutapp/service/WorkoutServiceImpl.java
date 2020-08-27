package com.joshrand.workoutapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joshrand.workoutapp.model.Workout;
import com.joshrand.workoutapp.repo.WorkoutRepo;

@Service
public class WorkoutServiceImpl implements WorkoutService
{
	@Autowired
	WorkoutRepo wRepo;

	@Override
	public void saveWorkout(Workout workout)
	{
		wRepo.save(workout);
		
	}

	@Override
	public void deleteWorkout(Workout workout)
	{
		wRepo.delete(workout);
		// TODO Auto-generated method stub
		
	}

}

package com.joshrand.workoutapp.service;

import com.joshrand.workoutapp.model.Workout;

public interface WorkoutService
{

	public void saveWorkout(Workout workout);
	public void deleteWorkout(Workout workout);
	
}

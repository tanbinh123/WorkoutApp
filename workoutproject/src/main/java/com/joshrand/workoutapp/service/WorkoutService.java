package com.joshrand.workoutapp.service;

import java.util.List;

import com.joshrand.workoutapp.model.Workout;

public interface WorkoutService
{

	public void saveWorkout(Workout workout);
	public void deleteWorkout(Workout workout);
	public List<Workout> findAllByWorkoutName(String workoutName);
	public List<Workout> findAllByUser(String user);
}

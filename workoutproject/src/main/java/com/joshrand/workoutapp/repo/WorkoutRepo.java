package com.joshrand.workoutapp.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.joshrand.workoutapp.model.Workout;

public interface WorkoutRepo extends CrudRepository<Workout, Integer>
{
	public List<Workout> findAllByWorkoutName(String workoutName);
}

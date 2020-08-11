package com.joshrand.workoutapp.repo;

import org.springframework.data.repository.CrudRepository;

import com.joshrand.workoutapp.model.Workout;

public interface WorkoutRepo extends CrudRepository<Workout, Integer>
{

}

package com.joshrand.workoutapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.joshrand.workoutapp.model.Workout;
import com.joshrand.workoutapp.service.WorkoutService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class WorkoutController
{
	@Autowired
	WorkoutService wService;
	
	
	@PostMapping("/createWorkout")
	public void createWorkout(@Valid @RequestBody List<Workout> workout)
	{
		System.out.println(workout.toString());
		
		for (Workout workout2 : workout)
		{
			wService.saveWorkout(workout2);
		}
			
	
	}
	
}

package com.joshrand.workoutapp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.joshrand.workoutapp.model.User;
import com.joshrand.workoutapp.model.Workout;
import com.joshrand.workoutapp.service.WorkoutService;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class WorkoutController
{
	@Autowired
	WorkoutService wService;
	
	@ResponseBody
	@GetMapping("/checkWorkoutExists/{wName}")
	public String checkWorkoutExists(@Valid @PathVariable String wName)
	{
		System.out.println("Checking workout exists ");
		List<Workout> list = wService.findAllByWorkoutName(wName);
		System.out.println(wName);
		
		System.out.println(list.toString());
		
		System.out.println(JSONArray.toJSONString(list));
		return JSONArray.toJSONString(list);
		
	}
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

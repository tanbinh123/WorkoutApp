package com.joshrand.workoutapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
@Entity
//Todo : Implement user that stores a list of todos
@Table(name = "WORKOUTS")
public class Workout {
	@Id
	@GeneratedValue
    private int id;
    @Override
	public String toString()
	{
		return "Workout [user=" + user + ", workoutName=" + workoutName + ", type=" + type + ", sets=" + sets
				+ ", reps=" + reps + "]";
	}
	private String user;
    @Autowired
    public Workout(String user, String workoutName, String type, int sets, int reps)
	{
		super();
		this.user = user;
		this.workoutName = workoutName;
		this.type = type;
		this.sets = sets;
		this.reps = reps;
	}
    @Autowired
	public Workout()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public String getUser()
	{
		return user;
	}
	public void setUser(String user)
	{
		this.user = user;
	}
	public String getWorkoutName()
	{
		return workoutName;
	}
	public void setWorkoutName(String workoutName)
	{
		this.workoutName = workoutName;
	}
	public String getType()
	{
		return type;
	}
	public void setType(String type)
	{
		this.type = type;
	}
	public int getSets()
	{
		return sets;
	}
	public void setSets(int sets)
	{
		this.sets = sets;
	}
	public int getReps()
	{
		return reps;
	}
	public void setReps(int reps)
	{
		this.reps = reps;
	}
	private String workoutName;
    private String type;
    private int sets;
    private int reps;
   
    
}

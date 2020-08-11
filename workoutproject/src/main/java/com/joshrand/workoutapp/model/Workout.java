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
	@Column(name = "USER")
    private String user;
    
//    @Size(min=10, message="Enter at least 10 Characters...")
//    private String description;

    private Date targetDate;
    private boolean isDone;
    @Autowired
    public Workout() {
    		super();
    }
    @Autowired
    public Workout(String user, String description, Date targetDate,
            boolean isDone) {
        super();
        //this.id = id;
        this.user = user;
        // had to change from desc to description because desc is a method in jpa
        //this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }
    @Autowired
    public Workout(int id, String user, String description, Date targetDate,
            boolean isDone) {
        super();
        this.id = id;
        this.user = user;
        // had to change from desc to description because desc is a method in jpa
        //this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Workout other = (Workout) obj;
        if (id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.format(
                "Todo [id=%s, user=%s, targetDate=%s, isDone=%s]", id,
                user, targetDate, isDone);
    }
    
}

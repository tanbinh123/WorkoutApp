package com.joshrand.workoutapp.mainapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@SpringBootApplication
@EntityScan(basePackages = "com.joshrand.workoutapp.model")
@ComponentScan(basePackages="com")
@EnableJpaRepositories(basePackages = "com.joshrand.workoutapp.repo")

public class WorkoutprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkoutprojectApplication.class, args);
	}

}

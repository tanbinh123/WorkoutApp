package com.joshrand.workoutapp.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name="USER_DATA")
public class User
{
	//@NotEmpty(message = "field can't be empty")
	@Id 
	@GeneratedValue
	private int userId;
	@Column(name="USER_NAME")
	private String userName;
	private String firstName;
	private String lastName;
	private String password;
	
	
	
	
	@Override
	public String toString()
	{
		return "User [userId=" + userId + ", userName=" + userName + ", firstName=" + firstName + ", lastName="
				+ lastName + ", password=" + password + "]";
	}


	public String getFirstName()
	{
		return firstName;
	}


	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}


	public String getLastName()
	{
		return lastName;
	}


	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}


	@Autowired
	public User()
	{
		super();
		//hobbiesList = hobbies.toString();
		//languageList = languages.toString();
		// TODO Auto-generated constructor stub
	}
	

	public String getuName()
	{
		return userName;
	}
	public void setuName(String userName)
	{
		this.userName = userName;
	}
	
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
	
	
	
}

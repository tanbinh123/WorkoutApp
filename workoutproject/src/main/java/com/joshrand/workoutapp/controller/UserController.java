package com.joshrand.workoutapp.controller;

import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.joshrand.workoutapp.model.User;
import com.joshrand.workoutapp.service.LoginService;
import com.joshrand.workoutapp.service.UserService;

import net.minidev.json.JSONArray;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class UserController
{
	@Autowired
	LoginService loginService;
	
	
	@Autowired
	UserService userService;

	@PostMapping("/registerUser")
	public void createUser(@Valid @RequestBody User user)
	{
		System.out.println(user.toString());
		//userService.addUser(new User("fred","fred","123","1234"));
		userService.addUser(user);
	}
	@ResponseBody
	@GetMapping("/pullUsers")
	public String pullUsers()
	{
		
		//userService.addUser(new User("fred","fred","123","1234"));
		List<User> list = userService.findAll();
		System.out.println(JSONArray.toJSONString(list));
		return JSONArray.toJSONString(list);
		
	}
	@ResponseBody
	@GetMapping("/loginUser/{name}/{password}")
	public String loginUser(@Valid @PathVariable String name,@Valid @PathVariable String password)
	{
		System.out.println("Login user ");
		List<User> list = new ArrayList<User>();
		
		list.add(userService.findUserByName(name));
		System.out.println(list.toString());
		if(loginService.validateUser(name, password))
		{
			System.out.println(JSONArray.toJSONString(list));
			return JSONArray.toJSONString(list);
		}
		else
		{
			return null;
		}
		
	}
	
}

package com.revature.project1.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "users")
public class UserController {
	
	private final UserService userService;
	@Autowired
	public UserController(UserService userService)
	{
		this.userService = userService;
	}
	@GetMapping
	public List<User> getUsers()
	{
		return userService.getUsers();
	}
	@GetMapping("/{id}")
	public Optional<User> getUserbyId(@PathVariable int id)
	{
		return userService.findById(id);
	}
	@PostMapping("/add")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	@GetMapping("/byUsername/{username}")
	public User byUsername(@PathVariable(value="username") String username)
	{
		return userService.byUser(username);
	}
	
	@PutMapping("/{id}")
	public void updateUser(@PathVariable int id, @RequestBody User user) {
		userService.updateUser(id, user);
	}

	@DeleteMapping("/{id}")
	public void removeUser(@PathVariable int id) {
		userService.removeUser(id);
	}
}

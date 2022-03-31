package com.revature.project1.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class UserService {

	private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	public User byUser(String username)
	{
		return userRepository.findByUsername(username);
	}
	public Optional<User> findById(int id) {
		System.out.println(id);
		return userRepository.findById(id);
	}

	public void addUser(User user) {
		userRepository.save(user);
	}

	public void updateUser(int id, User user) {
		userRepository.save(user);
	}
	
	public void removeUser(int id) {
		userRepository.deleteById(id);
	}
}

package com.revature.project1.user;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	User findByUsername(String username);

}

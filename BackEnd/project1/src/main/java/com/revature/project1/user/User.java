package com.revature.project1.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "p1")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	long mobile;
	String password;
	String username;
	String email;
	boolean employee;
	public User(long mobile, String password, String username, String email, boolean employee) {
		super();
		this.mobile = mobile;
		this.password = password;
		this.username = username;
		this.email = email;
		this.employee = employee;
	}
	public User() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isEmployee() {
		return employee;
	}
	public void setEmployee(boolean employee) {
		this.employee = employee;
	}
	
}

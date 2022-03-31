package com.revature.project1.reimbursement;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reimbursement")
public class Reimbursement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	float amount;
	boolean submitted;
	boolean resolved;
	String description;
	int receipt;
	String type;
	public Reimbursement(float amount, boolean submitted, boolean resolved, String description, int receipt,
			String type) {
		super();
		this.amount = amount;
		this.submitted = submitted;
		this.resolved = resolved;
		this.description = description;
		this.receipt = receipt;
		this.type = type;
	}
	public Reimbursement() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public boolean isSubmitted() {
		return submitted;
	}
	public void setSubmitted(boolean submitted) {
		this.submitted = submitted;
	}
	public boolean isResolved() {
		return resolved;
	}
	public void setResolved(boolean resolved) {
		this.resolved = resolved;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getReceipt() {
		return receipt;
	}
	public void setReceipt(int receipt) {
		this.receipt = receipt;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}

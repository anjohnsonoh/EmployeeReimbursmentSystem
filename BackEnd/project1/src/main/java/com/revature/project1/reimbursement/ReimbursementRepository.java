package com.revature.project1.reimbursement;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReimbursementRepository extends JpaRepository<Reimbursement, Integer>{
	
	List<Reimbursement> findByResolved(boolean resolved);
}

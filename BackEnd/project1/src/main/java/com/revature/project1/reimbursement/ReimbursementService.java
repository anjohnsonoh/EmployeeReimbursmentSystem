package com.revature.project1.reimbursement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.revature.project1.user.User;

@Service
public class ReimbursementService {

	private final ReimbursementRepository reimbursementRepository;
	
	@Autowired
	public ReimbursementService(ReimbursementRepository reimbursementRepository)
	{
		this.reimbursementRepository = reimbursementRepository;
	}
	public Optional<Reimbursement> getReimbursementById(int id)
	{
		return reimbursementRepository.findById(id);
	}
	public List<Reimbursement> getReimbursements()
	{
		return reimbursementRepository.findAll();
	}
	public List<Reimbursement> getByUser(User user)
	{
		Reimbursement reimbursement = new Reimbursement();
		reimbursement.receipt = user.getId();
		Example<Reimbursement> example = Example.of(reimbursement);
		return reimbursementRepository.findAll(example);
	}
	public void addReimbursement(Reimbursement reimbursement)
	{
		reimbursementRepository.save(reimbursement);
	}
	public void updateReimbursement(Reimbursement reimbursement)
	{
		reimbursementRepository.save(reimbursement);
	}
	public void removeReimbursement(int id)
	{
		reimbursementRepository.deleteById(id);
	}
	public List<Reimbursement> getByResolved(boolean resolved)
	{
		return reimbursementRepository.findByResolved(resolved);
	}
	public void resolveReimbursement(Reimbursement reimbursement)
	{
		reimbursement.setResolved(true);
		reimbursementRepository.save(reimbursement);
	}
}

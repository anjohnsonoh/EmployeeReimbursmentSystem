package com.revature.project1.reimbursement;

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
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "reimbursements")
public class ReimbursementController {

	private final ReimbursementService reimbursementService;
	@Autowired
	public ReimbursementController(ReimbursementService reimbursementService)
	{
		this.reimbursementService = reimbursementService;
	}
	@GetMapping
	public List<Reimbursement> getReimbursements()
	{
		return reimbursementService.getReimbursements();
	}
	@GetMapping("/{id}")
	public Optional<Reimbursement> getReimbursementbyId(@PathVariable("id") int id)
	{
		return reimbursementService.getReimbursementById(id);
	}
	@PostMapping("/add")
	public void addReimbursement(@RequestBody Reimbursement reimbursement)
	{
		reimbursementService.addReimbursement(reimbursement);
	}
	@PutMapping("/resolve/{id}")
	public void resolveReimbursement(@PathVariable("id") int id, @RequestBody Reimbursement reimbursement)
	{
		reimbursement.resolved = true;
		reimbursementService.resolveReimbursement(reimbursement);
	}
	@GetMapping("/resolve/{resolved}")
	public List<Reimbursement> getResolvedReimbursements(@PathVariable("resolved") boolean resolved)
	{
		return reimbursementService.getByResolved(resolved);
	}
	@PutMapping("/{id}")
	public void updateReimbursement(@PathVariable int id, Reimbursement reimbursement)
	{
		
		reimbursementService.updateReimbursement(reimbursement);
	}
	@DeleteMapping("/{id}")
	public void removeReimbursement(@PathVariable int id)
	{
		reimbursementService.removeReimbursement(id);
	}
}

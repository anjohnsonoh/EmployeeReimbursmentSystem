import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  public reimbursements: Reimbursement[] | undefined;
  public reimbursement: Reimbursement | undefined;
  public user: User | undefined;
  public manager: Boolean | undefined;
  constructor(
    private reimbursementService: ReimbursementService,
    private route: ActivatedRoute,
    private userService:UserService) { }

  public getPendingReimbursements(): void{

    this.reimbursementService.getPendingReimbursements().subscribe(
    (response: Reimbursement[])=>{
      this.reimbursements= response;
    },
    (error: HttpErrorResponse) => {alert(error.message);
    }
    );
  }
  public ResolveReimbursement(reimbursement: Reimbursement): void{
    this.reimbursementService.resolveReimbursement(reimbursement).subscribe(
      (response: Reimbursement)=>{
        console.log("Successful Update")
      },
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }
  /*getResolved(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    //this.user = this.userService.getUser(id)
  }*/
  isManager(): void
  {
    this.userService.getUser(localStorage.getItem("loggedInUser") || "").subscribe(
      (data:User)=>{
        if(data.employee == true)
        {
          this.manager = true;
        }
        else
        {
          this.manager=false
        }
        console.log(this.manager);
      }
      
    )
    
  }
  ngOnInit(): void {
    this.isManager();
    this.getPendingReimbursements();
  }
}

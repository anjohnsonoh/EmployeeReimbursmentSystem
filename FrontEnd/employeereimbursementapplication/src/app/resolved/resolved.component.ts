import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {


  public reimbursements: Reimbursement[] | undefined;
  public reimbursement: Reimbursement | undefined;
  
  constructor(
    private reimbursementService: ReimbursementService,
    private route: ActivatedRoute) { }

  public getResolvedReimbursements(): void{
    this.reimbursementService.getResolvedReimbursements().subscribe(
    (response: Reimbursement[])=>{
      this.reimbursements= response;
    },
    (error: HttpErrorResponse) => {alert(error.message);
    }
    );
  }
  /*getResolved(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    //this.user = this.userService.getUser(id)
  }*/
  ngOnInit(): void {
    this.getResolvedReimbursements();
  }

}

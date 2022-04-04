import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { Reimbursement } from '../reimbursement';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService,
    private appComponenet: AppComponent, private router: RouterModule) { }

  public onAddReimbursement(addForm: NgForm): void
  {
    this.reimbursementService.addReimbursement(addForm.value).subscribe(
      (response: Reimbursement) => {
        this.reimbursementService.addReimbursement(addForm.value).subscribe(
          (resonse2: Reimbursement) =>
          {
            this.appComponenet.getEmployees();
          }
        )
      },
      (error: HttpErrorResponse) => { 
        alert(error.message)
      }
    )
  }

  ngOnInit(): void {
  }

}

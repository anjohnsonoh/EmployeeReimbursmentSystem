import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
    private appComponenet: AppComponent){ }


  public onAddEmployee(addForm: NgForm): void
  {
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.appComponenet.getEmployees();
      },
      (error: HttpErrorResponse) => { 
        alert(error.message)
      }
    )
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInUser: User;
  constructor(
    private userService: UserService,
    private router: Router,
    private appcmp: AppComponent
  ) {     this.loggedInUser={
    username:"",
    password:"",
    mobile:0,
    email:"",
    employee:false,
    id:0

  }}

  ngOnInit(): void {
  }
  login(loginForm: NgForm): void
  {
    console.log(loginForm.value.username)
    this.userService.getUser(loginForm.value.username).subscribe(
      (data:User)=>{
        console.log(data);
        if (data.password == loginForm.value.password) {
          if(data.employee == false)
          {
            this.loggedInUser = data;
            localStorage.setItem('loggedInUser', data.username);
            this.router.navigate(['/employee']);
          }
          else if(data.employee ==true)
          {
            this.loggedInUser=data;
            localStorage.setItem('loggedInUser', data.username);
            this.router.navigate(['/manager']);
          }
        } else {
          console.log("Failed to Login")
        }
      }
    )
  }

}

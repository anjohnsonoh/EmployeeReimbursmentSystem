import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public users: User[] | undefined;
  public user: User;  
  public manager: Boolean | undefined;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
      this.user=this.userService.loggedInUser as User;
     }

  public getEmployees(): void{
    this.userService.getUsers().subscribe(
    (response: User[])=>{
      this.users = response;
    },
    (error: HttpErrorResponse) => {alert(error.message);
    }
    );
  }
  getUser(): void {
    this.userService.getUser(localStorage.getItem('loggedInUser') || '').subscribe(
      (data:User)=>{
        this.user = data;
      })
    }
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
    this.getUser();
    console.log(this.userService.loggedInUser);
    this.getEmployees();
  }

  logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInUser', '');
    this.router.navigate(["/login"])
  }
}

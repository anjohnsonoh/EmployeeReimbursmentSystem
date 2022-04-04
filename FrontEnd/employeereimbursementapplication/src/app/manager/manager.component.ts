import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public users: User[] | undefined;
  public user: User; 
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.user=this.userService.loggedInUser as User;
     }

  getUser(): void {
    this.userService.getUser(localStorage.getItem('loggedInUser') || '').subscribe(
      (data:User)=>{
        this.user = data;
      })
    }
  ngOnInit(): void {
    this.getUser();
  }

  logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInUser', '');
    this.router.navigate(['/login'])
  }
}

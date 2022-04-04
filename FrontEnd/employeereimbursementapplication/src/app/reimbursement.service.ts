import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reimbursement } from './reimbursement';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  private apiServerUrl = environment.apiBaseUrl;
  private reimbursement: Reimbursement | undefined;
  constructor(private http: HttpClient, private userService: UserService){ }


  public getPendingReimbursements(): Observable<Reimbursement[]>{
      return this.http.get<Reimbursement[]>(`${this.apiServerUrl}/reimbursements/resolve/false`)
  }
  public getResolvedReimbursements(): Observable<Reimbursement[]>{
      return this.http.get<Reimbursement[]>(`${this.apiServerUrl}/reimbursements/resolve/true`)
  }
  public getReimbursement(id: Number): Observable<Reimbursement>
  {
      return this.http.get<Reimbursement>(`${this.apiServerUrl}/reimbursements/${id}`)
  }
  public addReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{
      this.userService.getUser(localStorage.getItem("loggedInUser") || "").subscribe(
          (data:User)=>{
            reimbursement.receipt = data.id;
          }
      )
      console.log(JSON.stringify(reimbursement));
      return this.http.post<Reimbursement>(`${this.apiServerUrl}/reimbursements/add`, reimbursement as Reimbursement)
  }
  public updateReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{
      return this.http.put<Reimbursement>(`${this.apiServerUrl}/reimbursements/${reimbursement.id}`, reimbursement)
  }
  public removeUser(user: Reimbursement): Observable<Reimbursement>{
      return this.http.delete<Reimbursement>(`${this.apiServerUrl}/users/${user.id}`)
  }
  public getUser(username: String): Observable<Reimbursement>
  {
      return this.http.get<Reimbursement>(`${this.apiServerUrl}/users/byUsername/${username}`)
  }
  public resolveReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{
      console.log(reimbursement);
      reimbursement.resolved = true;
      console.log(`${this.apiServerUrl}/reimbursements/${reimbursement.id}`)
      return this.http.put<Reimbursement>(`${this.apiServerUrl}/reimbursements/${reimbursement.id}`, reimbursement);
  }
}

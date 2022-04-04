import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl = environment.apiBaseUrl;
    loggedInUser: User | undefined;
    constructor(private http: HttpClient){ }
    public getUsers(): Observable<User[]>{
        return this.http.get<User[]>(`${this.apiServerUrl}/users`)
    }
    /*public getUser(username: string, password: string): Observable<User>
    {
        return this.http.get<User>(`${this.apiServerUrl}/users`)
    }*/
    public addUser(user: User): Observable<User>{
        return this.http.post<User>(`${this.apiServerUrl}/users/add`, user)
    }
    public updateUser(user: User): Observable<User>{
        return this.http.put<User>(`${this.apiServerUrl}/users/${user.id}`, user)
    }
    public removeUser(user: User): Observable<User>{
        return this.http.delete<User>(`${this.apiServerUrl}/users/${user.id}`)
    }
    public getUser(username: String): Observable<User>
    {
        return this.http.get<User>(`${this.apiServerUrl}/users/byUsername/${username}`)
    }
}
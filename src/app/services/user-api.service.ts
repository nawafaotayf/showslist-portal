import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  readonly userApiUrl = "http://localhost:8080/movielist/users"
  readonly adminApiUrl = "http://localhost:8080/movielist-admin/users"

  constructor(private http: HttpClient, private router: Router) { }

  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.userApiUrl}/${id}`)
  }

  updateUserById(id: number, user: any): Observable<any>{
    return this.http.put(`${this.userApiUrl}/updateuser/${id}`, user)
  }
  AllUsers(): Observable<any>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser") ?? '{}')
    if(currentUser && currentUser.roles === "ADMIN"){
      return this.http.get(`${this.adminApiUrl}/allusers`)
    }
    else{
     this.router.navigate(['/Unauthorized'])
    throw new Error('Unauthorized');
    }
  }
  deleteUser(id: number): Observable<any>{
      return this.http.delete(`${this.adminApiUrl}/deleteuser/${id}`)
    }




}


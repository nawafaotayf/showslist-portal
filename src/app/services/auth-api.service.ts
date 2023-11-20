import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  readonly authApiUrl = "http://localhost:8080/movielist/auth"
  public isloggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  constructor(private http: HttpClient) {}

  isAuthenticatied(): boolean {
    const token: string | null = localStorage.getItem("Token")
    return token!==null
  }
  authenticate(): Observable<Users>{
    const storedToken: string|null = localStorage.getItem("Token")
    if(storedToken === null){
      throw null;
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer  ${storedToken}`
      })
    }
    return this.http.get<Users>(`${this.authApiUrl}/verify`, options)
  }


  signUp(username: string, password:string, email: string, dob: Date): Observable<Users>{
    const user: Users = new Users(0, username, password, email, dob)
    return this.http.post<Users>(`${this.authApiUrl}/signup`, user)
  }
  login(username: string, password: string): Observable<any>{
    const body = {username, password}
    return this.http.post<any>(`${this.authApiUrl}/signin`, body)
  }
  logout(){
    this.isloggedIn = false
    localStorage.removeItem("Token")
    localStorage.removeItem("currentUser")
    localStorage.removeItem('isLoggedIn');
  }

}

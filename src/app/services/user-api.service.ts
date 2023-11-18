import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  readonly userApiUrl = "http://localhost:8080/movielist/users"
  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.userApiUrl}/${id}`)
  }
  updateUserById(id: number, user: any): Observable<any>{
    return this.http.put(`${this.userApiUrl}/updateuser/${id}`, user)
  }


}

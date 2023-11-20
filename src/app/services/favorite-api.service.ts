import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteApiService {
  readonly favoriteApiUrl = "http://localhost:8080/movielist/favorite"
  constructor(private http: HttpClient) { }

  addToFavorite(favorite: any): Observable<any> {
    return this.http.post(this.favoriteApiUrl, favorite)
  }

  getFavoriteByUserId(id: number): Observable<any>{
    return this.http.get(`${this.favoriteApiUrl}/user/${id}`)
  }

  getFavoriteByUserIdAndShowId(userId: number, showId: number): Observable<any>{
    return this.http.get(`${this.favoriteApiUrl}/show/${userId}/${showId}`)
  }
  getFavoriteAverage(id: number): Observable<any>{
    return this.http.get(`${this.favoriteApiUrl}/avg-rating/${id}`)
  }
}


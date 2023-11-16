import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingApiService {
  readonly ratingApi = "http://localhost:8080/movielist/rating"

  constructor(private http: HttpClient) {}

  getRatingByShows(id: Number): Observable<any>{
    return this.http.get(`${this.ratingApi}/${id}`)
  }
  createRating(ratings: any): Observable<any>{
    return this.http.post(`${this.ratingApi}/addrating`, ratings)
  }
}

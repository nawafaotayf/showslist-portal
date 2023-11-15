import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  readonly movieUserApi = "http://localhost:8080/movielist/movie"
  constructor(private http :HttpClient) { }
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.movieUserApi}/allmovies`)
  }
}

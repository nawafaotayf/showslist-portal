import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  readonly movieApi = "http://localhost:8080/movielist/movie"

  constructor(private http :HttpClient) { }
  
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.movieApi}/allmovies`)
  }
  getMovieById(id: number): Observable<any>{
    return this.http.get(`${this.movieApi}/${id}`)
  }
}

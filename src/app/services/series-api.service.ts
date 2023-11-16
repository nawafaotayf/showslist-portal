import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {
 readonly seriesApi = "http://localhost:8080/movielist/series"
  constructor(private http: HttpClient) { }

  getAllSeries(): Observable<any>{
    return this.http.get(`${this.seriesApi}/allseries`)
  }
  getSeriesById(id: number): Observable<any>{
    return this.http.get(`${this.seriesApi}/${id}`)
  }
}

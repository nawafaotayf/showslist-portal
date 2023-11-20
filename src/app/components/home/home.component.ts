import { Component } from '@angular/core';
import { Movies } from 'src/app/models/Movies.model';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movies[] = []

  constructor(private movieApi: MovieApiService){}


  getAllMovies(){
    this.movieApi.getAllMovies().subscribe({
      next: (movie)=> {
        this.movies = movie
      },
      error: 
      (err)=>{
        console.log(err)
      } 
    })
  }
}

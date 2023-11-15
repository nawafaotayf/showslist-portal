import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/Movies.model';
import { Shows } from 'src/app/models/shows.model';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  movies: Movies[] = []
constructor(private movieApi: MovieApiService){}

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies(){
    this.movieApi.getAllMovies().subscribe({
      next:
      (movie)=> {this.movies = movie}
    }
    )
  }
}

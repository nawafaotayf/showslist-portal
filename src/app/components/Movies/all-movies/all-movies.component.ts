import { Component } from '@angular/core';
import { Movies } from 'src/app/models/Movies.model';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  movies: Movies[] = []
constructor(private movieApi: MovieApiService){}

  ngOnInit(): void {
    this.getAllMovies()
  }

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

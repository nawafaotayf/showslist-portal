import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/Movies.model';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movieDetails: Movies[] = []
  id: number = 0  
  constructor(private movieApi: MovieApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) 
    this.getMovieById(this.id)
    console.log(this.id)
  }

  getMovieById(id: number){
    this.movieApi.getMovieById(id).subscribe({
      next: (movie)=> {
        this.movieDetails = [movie]
      },
    })
  }

}

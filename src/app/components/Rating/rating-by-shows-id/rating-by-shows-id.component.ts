import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ratings } from 'src/app/models/Ratings.model';
import { RatingApiService } from 'src/app/services/rating-api.service';
@Component({
  selector: 'app-rating-by-shows-id',
  templateUrl: './rating-by-shows-id.component.html',
  styleUrls: ['./rating-by-shows-id.component.css']
})
export class RatingByShowsIdComponent implements OnInit{
  rating: Ratings[] = []
  @Input()
  id: number = 0
  
  constructor(private ratingApi: RatingApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getRatingByShows(this.id)
  }

  getRatingByShows(id: Number){
    return this.ratingApi.getRatingByShows(id).subscribe({
      next: (ratings) =>
      {
        this.rating = ratings
      }
    })
  }
}

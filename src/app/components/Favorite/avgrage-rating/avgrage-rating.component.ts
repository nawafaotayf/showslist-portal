import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/models/Favorite.model';
import { FavoriteApiService } from 'src/app/services/favorite-api.service';

@Component({
  selector: 'app-avgrage-rating',
  templateUrl: './avgrage-rating.component.html',
  styleUrls: ['./avgrage-rating.component.css']
})
export class AvgrageRatingComponent {
  favorite: Number = 0
  showId:number = 0
  constructor(private favoriteApi: FavoriteApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'))
    this.getAvgRating()
  }
  getAvgRating(){
    this.favoriteApi.getFavoriteAverage(this.showId).subscribe({
      next: (favorites) =>{
        this.favorite = favorites
        console.log(this.favorite)

        }
    })
}
}

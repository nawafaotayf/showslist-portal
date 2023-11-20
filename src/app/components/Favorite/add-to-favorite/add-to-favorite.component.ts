import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteApiService } from 'src/app/services/favorite-api.service';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css']
})
export class AddToFavoriteComponent implements OnInit{
  @Input()
  showId: number = 0
  favorite: any
  
  constructor(private favoriteApi: FavoriteApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    const userId = currentUser?.id;
    this.favorite = {
      rating: 0,
      shows:{
        id: this.showId
      },
      users: {
        id: userId
      }
    }

  }
  getAvgRating(){
    this.favoriteApi.getFavoriteAverage(this.showId).subscribe({
      next: (favorites) =>{
        this.favorite = favorites
        }
    })
  }
  addToFavorite(){
    this.favoriteApi.addToFavorite(this.favorite).subscribe({
      next: (favorites) =>
      {console.log("Added"), favorites
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}

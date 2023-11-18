import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/models/Favorite.model';
import { FavoriteApiService } from 'src/app/services/favorite-api.service';

@Component({
  selector: 'app-favorite-details',
  templateUrl: './favorite-details.component.html',
  styleUrls: ['./favorite-details.component.css']
})
export class FavoriteDetailsComponent implements OnInit{
  @Input()
  id: number = 0
  favorite: Favorite[] = []
  constructor(private favoriteApi: FavoriteApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'))
  const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
  const userId = currentUser?.id;
  this.getFavoriteByUserId(userId)
  }

  getFavoriteByUserId(id: number){
    this.favoriteApi.getFavoriteByUserId(id).subscribe({
      next: (favorites) =>
      this.favorite = favorites
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { FavoriteApiService } from 'src/app/services/favorite-api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css']
})
export class AddToFavoriteComponent implements OnInit{
  @Input()
  showId: number = 0
  favorite: any
  
  constructor(private favoriteApi: FavoriteApiService, private route: ActivatedRoute, private router: Router,  public authApi: AuthApiService){}
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
    Swal.fire('Success!', 'show added to your favorie successfully.', 'success')
    this.router.navigate(["/favorite"])

  }
}

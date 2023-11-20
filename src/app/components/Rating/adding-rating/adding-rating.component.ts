import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { RatingApiService } from 'src/app/services/rating-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adding-rating',
  templateUrl: './adding-rating.component.html',
  styleUrls: ['./adding-rating.component.css']
})
export class AddingRatingComponent implements OnInit{  
  @Input()
  Id: number = 0
  @Output()
  commentAdded =  new EventEmitter<any>()
  rating: any;
  commentInput: FormControl
  ratingForm: FormGroup

  constructor(private ratingApi: RatingApiService, private authApi: AuthApiService, private route: ActivatedRoute){
    this.commentInput = new FormControl("", Validators.required)
    this.ratingForm = new FormGroup({
      comment: this.commentInput
    })
  }
  ngOnInit(): void {
    this.Id = Number(this.route.snapshot.paramMap.get('id'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    const userId = currentUser?.id;
    
    this.rating  = [{
      comment: "",
      users:{
        id: userId
      },
      shows:{
        id: this.Id
      }
    }]
  }

  addComment(){
    this.rating[0].comment = this.ratingForm.get('comment')?.value;
    this.ratingApi.createRating(this.rating).subscribe({
      next:(ratings) => 
      {
      console.log("Created" ,ratings),
      this.commentAdded.emit(ratings)
      },
      error: (err) =>{
        console.log(err)
      }
    })
    Swal.fire('Success!', 'Your profile has been updated.', 'success')
    this.ratingForm.reset()

  }
}

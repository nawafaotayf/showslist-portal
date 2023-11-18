import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/Users.model';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  users: Users[] = []
  id: number = 0
  constructor(private userApi: UserApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    const userId = currentUser?.id;
    this.getUserById(userId)
  }

  getUserById(id: number){
    return this.userApi.getUserById(id).subscribe({
      next: (user) => 
      this.users = [user]
    })  
  }
}

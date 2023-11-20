import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users.model';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{
  users: Users[] = []

  constructor(private userApi: UserApiService){}
  ngOnInit(): void {
    this.allUsers()  
}

  allUsers(){
    return this.userApi.AllUsers().subscribe({
      next: (alluser)=>{
        this.users = alluser
      }
    })
  }
}

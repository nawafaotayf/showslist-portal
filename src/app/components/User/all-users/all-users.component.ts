import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users.model';
import { UserApiService } from 'src/app/services/user-api.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{
  users: Users[] = []

  
  constructor(private userApi: UserApiService, private router: Router, private location: Location){}
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

  deleteUserById(userId: number){
    return this.userApi.deleteUser(userId).subscribe({
      next:(user)=> {this.users = user,
        Swal.fire('Success!', 'User deleted successfully.', 'success')
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([decodeURI(this.location.path())]);
        });},
      
      error: (err) =>{
        console.log(err)
      }
    })  
}


}

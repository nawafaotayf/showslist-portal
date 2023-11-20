import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users.model';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  users: Users[] = []
  id: number = 0
  constructor(public authApi: AuthApiService, private router: Router, private userApi: UserApiService, private route: ActivatedRoute){
  }
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
  logout(){
    this.authApi.logout()
    this.router.navigate(["/login"])
  }
}

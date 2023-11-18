import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authApi: AuthApiService, private router: Router){}
  logout(){
    this.authApi.logout()
    this.router.navigate(["/login"])
  }
}

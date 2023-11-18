import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authApi: AuthApiService, public router: Router) {}
  canActivate(): boolean{
    if(!this.authApi.isAuthenticatied()){
      this.router.navigate(["login"])
      return false
    }
    return true
  }
}

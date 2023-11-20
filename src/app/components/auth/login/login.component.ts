import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users.model';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameInput: FormControl
  passwordInput: FormControl
  loginForm: FormGroup
  errorMsg: string

  constructor(private loginApi: AuthApiService, private router: Router){
    this.usernameInput = new FormControl("",  [Validators.required, Validators.minLength(3)])
    this.passwordInput = new FormControl("",[Validators.required, Validators.minLength(7)])
    this.loginForm = new FormGroup({
       username: this.usernameInput,
       password: this.passwordInput,
    })
    this.errorMsg = ""

  }
  login(){
    this.loginApi.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (response) => {
        console.log("Login successfuly")
        this.loginApi.isloggedIn = true
        localStorage.setItem("isLoggedIn", 'true')
        localStorage.removeItem("Token")
        localStorage.setItem("Token", response.token)
        this.loginApi.authenticate().subscribe({
          next: (userData: Users) =>{
            localStorage.setItem("currentUser", JSON.stringify(userData))
            this.router.navigate(["/"])
          }
        })
      },
      error:(err) =>{
        console.log(err, err.status)
        if(err.status === 403){
          this.errorMsg = "Wrong username/password"
        }
      }
    })
  }






}

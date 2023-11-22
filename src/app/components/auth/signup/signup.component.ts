import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users.model';
import { AuthApiService } from 'src/app/services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  usernameInput: FormControl
  passwordInput: FormControl
  emailInput: FormControl
  dobInput: FormControl
  signUpForm: FormGroup
  errorMsg: string

  constructor(private signUpApi: AuthApiService, private router: Router){
    this.usernameInput = new FormControl("",  [Validators.required, Validators.minLength(3)])
    this.passwordInput = new FormControl("",[Validators.required, Validators.minLength(7)])
    this.emailInput = new FormControl("", [Validators.required, Validators.email])
    this.dobInput = new FormControl("", Validators.required)
    this.signUpForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput,
      email: this.emailInput,
      dob: this.dobInput
    })
    this.errorMsg = ""
  }

    saveUser(){
      this.signUpApi.signUp(
        this.signUpForm.value.username,
        this.signUpForm.value.password,
        this.signUpForm.value.email,
        this.signUpForm.value.dob,
      ).subscribe({
        next: (users: Users)=>{
        console.log("created", [users]),
        Swal.fire('Success!', 'Signup successfully.', 'success')
        this.router.navigate(["/login"])
      },
        error: (err) =>{
          console.log(err, err.status)
          if(err.status === 400){
            this.errorMsg = "Duplcate username/email"
          }
        }
      })
      
    }
  }


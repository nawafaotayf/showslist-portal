import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/Users.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  id: number = 0
  usernameInput: FormControl
  passwordInput: FormControl
  emailInput: FormControl
  dobInput: FormControl
  updateForm: FormGroup
  user: any

  constructor(private userApi: UserApiService, private route: ActivatedRoute, private location: Location){
    this.usernameInput = new FormControl("",  Validators.minLength(5))
    this.passwordInput = new FormControl("", Validators.minLength(7))
    this.emailInput = new FormControl("", Validators.email)
    this.dobInput = new FormControl("")
    this.updateForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput,
      email: this.emailInput,
      dob: this.dobInput
    })
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.userApi.getUserById(this.id).subscribe((user: Users) => {
      this.user = user;
      this.updateForm.patchValue({
        username: user.username,
        password: user.password,
        email: user.email,
        dob: user.dob
      })
    })
  }


  updateUserById(){
    this.user = this.updateForm.value
    this.userApi.updateUserById(this.id, this.user).subscribe({
      next:(updateusers)=>
      console.log("updated", updateusers,
      ),

      error: (err) => console.log(err)
    }
    )
    Swal.fire('Success!', 'Your profile has been updated.', 'success')
    this.location.back()
  }
}

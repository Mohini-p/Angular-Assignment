import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  signupForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
  });

  constructor(
    private authService : AuthenticationService , 
    private router : Router,
    private toast : HotToastService
  ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  submit(){
    // if form is not valid -- return nothing
    if(!this.signupForm.valid){
      return;
    }

    // destructuring the var
    const {email , password} = this.signupForm.value;
    // Creates the user  
    this.authService.signin(email,password).pipe(
      this.toast.observe({
        success : 'Registered Successfully!',
        loading : 'Registering...',
        error: ({ message }) => `${message} `
      })
    ).subscribe(()=>{
       this.router.navigate(['/home']);
    });
  }

}

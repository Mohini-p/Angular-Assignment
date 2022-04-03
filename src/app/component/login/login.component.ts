import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
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
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    // if form is not valid -- return nothing
    if(!this.loginForm.valid){
      return;
    }

    // destructuring the var
    const {email , password} = this.loginForm.value;
    // check and subscribe and route to the home page 
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success : 'Logged in successfully!!',
        loading : 'logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(()=>{
       this.router.navigate(['/home']);
    });

  }
}

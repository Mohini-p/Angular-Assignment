import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(usename: string , password:string){
    return from(signInWithEmailAndPassword(this.auth,usename,password));
  }

  logout(){
    return from(this.auth.signOut());
  }

  signin(username : string,password:string){
    return from(createUserWithEmailAndPassword(this.auth,username,password));
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
 
 
@Injectable()
export class AuthenticationService {
 
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
 
  login(id:string,mdp:string) {
    var dummy_response = {
      user_id: id,
      user_mdp: mdp
    };
    var cred = {
      user_id: 'susu',
      user_mdp: 'password'
    }

    if(dummy_response.user_id == cred.user_id && dummy_response.user_mdp == dummy_response.user_mdp){
      this.storage.set('USER_INFO', cred).then((response) => {
        this.router.navigate(['dashboard']);
        this.authState.next(true);
      });
    }
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }

}
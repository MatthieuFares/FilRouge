import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component } from '@angular/core';
 
 
@Injectable()
export class AuthenticationService {
  status: string;
  statusCo: Observable<any>;
  error: string;
  
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private httpClient: HttpClient,
    private toastCtrl: ToastController
  ) {
      this.platform.ready().then(() => {
        this.ifLoggedIn();
      });
      this.status = '';
      this.data = '';
      this.error = '';
    /*this.statusCo = this.httpClient.get(`http://maderaproject.com/api/maderaapi/user/login.php?username=${this.user_id}&pwd=${this.user_mdp}`);
    this.statusCo.subscribe(data => {
      console.log('status : ', data)
    });*/
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }


  login(id:string, mdp:string) {
    var value = {
      user_id: id,
      user_mdp: mdp
    };

    this.statusCo = this.httpClient.get(`http://maderaproject.com/api/maderaapi/user/login.php?username=${value.user_id}&pwd=${value.user_mdp}`);

    this.statusCo.subscribe(
      data => {
        this.data = JSON.stringify(data);
        console.log(data);

        this.storage.set('USER_INFO').then((response) => {
          this.router.navigate(['menu']);
          this.authState.next(true);
        });
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
        console.log(err);

        let toast = this.toastCtrl.create({
          message: 'Vos informations sont incorrectes !',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        }).then(toast => {
          toast.present();
        });
      }
    )
  };
 
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
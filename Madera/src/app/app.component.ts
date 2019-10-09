import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/Authentication.service';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate:any;
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
	  private menuSideBar: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['menu']);
        } else {
          this.router.navigate(['login']);
        }
      })
    });
  }
  
  openFirst() {
    this.menuSideBar.enable(true, 'first');
    this.menuSideBar.open('first');
  }

  openEnd() {
    this.menuSideBar.open('end');
  }

  openCustom() {
    this.menuSideBar.enable(true, 'custom');
    this.menuSideBar.open('custom');
  }

  goCreer(){
    this.router.navigate(['/creer']);
  }

  goAdmin(){
    this.router.navigate(['/administration']);
  }

}

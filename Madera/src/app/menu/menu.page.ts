import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }

}

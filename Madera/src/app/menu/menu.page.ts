import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  goConsult(){
    this.router.navigate(['/consultation']);
  }

  goAdmin(){
    this.router.navigate(['/administration']);
  }

  goModalitePaiement() {
    this.router.navigate(['/modalitePaiement']);
  }

  logoutUser(){
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }


  ngOnInit() {
  }

  goStock(){
    this.router.navigate(['/stock']);
  }

  goClient(){
    this.router.navigate(['/client']);
  }

  goInfo(){
    this.router.navigate(['/information']);
  }

  logoutUser(){
    this.authService.logout();
  }
}

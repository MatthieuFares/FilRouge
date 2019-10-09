import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-suiviPaiement',
  templateUrl: './suiviPaiement.page.html',
  styleUrls: ['./suiviPaiement.page.scss'],
})
export class SuiviPaiementPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}

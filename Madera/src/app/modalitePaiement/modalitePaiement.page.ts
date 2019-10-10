import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-modalitePaiement',
  templateUrl: './modalitePaiement.page.html',
  styleUrls: ['./modalitePaiement.page.scss'],
})
export class ModalitePaiementPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }


  ngOnInit() {
  }

  goSuiviPaiement() {
    this.router.navigate(['/suiviPaiement']);
  }

  goSuiviDevis() {
    this.router.navigate(['/suiviDevis']);
  }

  logoutUser(){
    this.authService.logout();
  }
}

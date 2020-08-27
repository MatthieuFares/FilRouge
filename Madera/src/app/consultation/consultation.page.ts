import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }


  ngOnInit() {
  }

  goModule(){
	this.router.navigate(['/module']);  
  }
  goFamilleComposant(){
	this.router.navigate(['/famillecomposant']);  
  }
  goComposant(){
	this.router.navigate(['/composant']);  
  }
  goFournisseur(){
	this.router.navigate(['/fournisseur']);  
  }

  goDevis(){
    this.router.navigate(['/devis'])
  }

  logoutUser(){
    this.authService.logout();
  }
}

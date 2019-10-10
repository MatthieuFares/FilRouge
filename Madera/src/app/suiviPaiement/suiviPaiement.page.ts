import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suiviPaiement',
  templateUrl: './suiviPaiement.page.html',
  styleUrls: ['./suiviPaiement.page.scss'],
})
export class SuiviPaiementPage implements OnInit {
  data: string;
  error: string;
  commandeListe: any = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private httpClient: HttpClient
    ) { 
      this.data = '';
      this.error = '';
    }

  ionViewWillEnter() {
    this.prepareDataRequest().subscribe(
      (data: any) => {
        this.commandeListe = data.data;
        console.log(data.data);
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }
    
    private prepareDataRequest(): Observable<object> {
      const dataUrl = 'http://maderaproject.com/api/maderaapi/commande/read.php';
      return this.httpClient.get(dataUrl);
    }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}

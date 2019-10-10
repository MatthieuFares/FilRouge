import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suiviDevis',
  templateUrl: './suiviDevis.page.html',
  styleUrls: ['./suiviDevis.page.scss'],
})
export class SuiviDevisPage implements OnInit {
  data: string;
  error: string;
  devisListe: any = [];

  etat: boolean;
  day: any;
  indexOfDay: any;

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient
    ) {
      this.data = '';
      this.error = '';
    }

  ionViewWillEnter() {
    this.prepareDataRequest().subscribe(
      (data: any) => {
        this.devisListe = data.data;
        console.log(data.data);
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }
  
  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'http://maderaproject.com/api/maderaapi/devis/read.php';
    return this.httpClient.get(dataUrl);
  }
  private prepareDataRequestOne(): Observable<object> {
    const dataUrlOne = `http://maderaproject.com/api/maderaapi/devis/read_one?idDevis=${this.etat}.php`;
    return this.httpClient.get(dataUrlOne);
  }

  checkEventValider(recupVal: any) {
    console.log(recupVal);
  }

  checkEventRefuser(recupRef: any) {
    console.log(recupRef);
  }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}

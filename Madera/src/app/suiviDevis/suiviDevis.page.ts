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

  valider: boolean;
  refuser: boolean;

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient
    ) {
      this.data = '';
      this.error = '';
     }

  ionViewWillEnter() {
    this.prepareDataRequest().subscribe(
      data => {
        data = data;
        //this.data = JSON.stringify(data);
        console.log(data);
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }
  
  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'http://maderaproject.com/api/maderaapi/composant/read_one.php?composantId=1';
    return this.httpClient.get(dataUrl);
  }

  checkEvent() {
    this.prepareDataRequest().subscribe(

    )
  }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.page.html',
  styleUrls: ['./fournisseur.page.scss'],
})
export class FournisseurPage implements OnInit {
  fournisseurs: Observable<any>;
  data: string;
  error: string;
  fournisseurDetail: any = [];

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient,
    private router: Router
    ) { 
      this.data = '';
      this.error = '';
    }

  ionViewWillEnter() {
    this.prepareDataRequest().subscribe(
      (data: any) => {
        this.fournisseurDetail = data.data;
        console.log(data.data);
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }
  
  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'http://maderaproject.com/api/maderaapi/fournisseur/read.php';
    return this.httpClient.get(dataUrl);
  }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }



}

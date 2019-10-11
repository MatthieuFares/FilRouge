import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-famillecomposant',
  templateUrl: './famillecomposant.page.html',
  styleUrls: ['./famillecomposant.page.scss'],
})
export class FamilleComposantPage implements OnInit {
  famillecomposants: Observable<any>;
  data: string;
  error: string;
  famillecomposantDetail: any = [];

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
        this.famillecomposantDetail = data.data;
        console.log(data.data);
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }
  
  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'http://maderaproject.com/api/maderaapi/famillecomposant/read.php';
    return this.httpClient.get(dataUrl);
  }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }



}

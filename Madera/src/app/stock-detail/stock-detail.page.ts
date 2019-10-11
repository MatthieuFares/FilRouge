import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/Authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})
export class StockDetailPage implements OnInit {
  stocks: Observable<any>;
  data: string;
  error: string;

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
      (data:any) => {
        this.data = data;
        console.log(data)
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


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}
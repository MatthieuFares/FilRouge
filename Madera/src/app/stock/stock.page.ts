import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  stocks: Observable<any>;

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient
    ) { 
      this.stocks = this.httpClient.get('http://maderaproject.com/api/maderaapi/service/read.php');
      this.stocks.subscribe(data => {
        console.log('les services : ', data);
      })
    }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
  
}

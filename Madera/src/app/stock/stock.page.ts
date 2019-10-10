import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThrowStmt } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  stocks: Observable<any>;
  data: string;
  error: string;
  
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient
    ) { 
      /*this.stocks = this.httpClient.get('http://maderaproject.com/api/maderaapi/service/read.php');
      this.stocks.subscribe(data => {
        console.log('les services : ', data);
      })*/
      this.data = '';
      this.error = '';
    }

  
  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'http://maderaproject.com/api/maderaAPI/composant/read.php';
    return this.httpClient.get(dataUrl);
  }

  ngOnInit() {
    this.prepareDataRequest().subscribe(
      data => {
      this.data = JSON.stringify(data);
      /*var rows = JSON.parse(data);*/
      },
      err => {
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    )
  }

  logoutUser(){
    this.authService.logout();
  }

  
}

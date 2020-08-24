import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/Authentication.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'



@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})


export class StockDetailPage implements OnInit {
  stocks: Observable<any>;
  data: string;
  error: string;
  id:string;

  @Input() FormUp:FormGroup;
  stockLille: number;
  stockDax: number;
  stockAnnecy: number;

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClient,
    private Activatedroute:ActivatedRoute,
    private formbuilder:FormBuilder,
    private router: Router
    ) { 
      this.FormUp = formbuilder.group({
        stockLille: [''],
        stockDax: [''],
        stockAnnecy: ['']
       });
      this.data = '';
      this.error = '';
      this.id = '';
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
    this.id = this.Activatedroute.snapshot.paramMap.get("id");
    const dataUrl = `http://maderaproject.com/api/maderaapi/composant/read_one.php?composantId=${this.id}.php`;
    return this.httpClient.get(dataUrl);
  }

  private sendDataUpdate(data:any): Observable<any>{
    const dataUrl = `http://maderaproject.com/api/maderaapi/stocker/read_one.php?composantId=${this.id}.php`;
    return this.httpClient.put(dataUrl,{
      idSite:data.idSite,
      idProduction:data.idProduction,
      idComposant:this.id,
      quantite:data.quantite,
      lastUpdateUserId: data.lastUpdateUserId
    });
  }

  checkUpdateData(data:any){
    if(data.idSite == "1"){
    data.idSite=data.idSite,
    data.idProduction=data.idProduction,
    data.idComposant=this.id,
    data.quantite=this.stockLille,
    data.lastUpdateUserId= data.lastUpdateUserId}

    else if(data.idSite == "2"){
      data.idSite=data.idSite,
      data.idProduction=data.idProduction,
      data.idComposant=this.id,
      data.quantite=this.stockDax,
      data.lastUpdateUserId= data.lastUpdateUserId}
    

    else{
      data.idSite=data.idSite,
      data.idProduction=data.idProduction,
      data.idComposant=this.id,
      data.quantite=this.stockAnnecy,
      data.lastUpdateUserId= data.lastUpdateUserId}
    
      this.sendDataUpdate(data).subscribe(data=>{
        console.log(data);
      })
  }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}
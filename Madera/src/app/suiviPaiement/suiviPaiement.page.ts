import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class commande{
  idPaiement : number;
  idCommande : number;
  signaturePaiement : string;
  permisConstruirePaiement : string;
  OuvertureChantierPaiement : string;
  achevementFondationPaiement : string;
  achevementMurPaiement : string;
  miseHorsDeauPaiement : string;
  achevementTravauxPaiement : string;
  remiseClePaiement : string;
  statutPaiement : string;
  dateDernierPaiement : Date;

  constructor(idPaiement : number, idCommande : number, signaturePaiement: string, permisConstruirePaiement: string, OuvertureChantierPaiement:string, achevementFondationPaiement : string, achevementMurPaiement:string, miseHorsDeauPaiement : string, achevementTravauxPaiement:string, remiseClePaiement :string, statutPaiement:string, dateDernierPaiement:Date){
    this.idCommande = idCommande;
    this.idPaiement = idPaiement;
    this.signaturePaiement = signaturePaiement;
    this.permisConstruirePaiement = permisConstruirePaiement;
    this.OuvertureChantierPaiement = OuvertureChantierPaiement;
    this.achevementFondationPaiement = achevementFondationPaiement;
    this.achevementMurPaiement = achevementMurPaiement;
    this.miseHorsDeauPaiement = miseHorsDeauPaiement;
    this.achevementTravauxPaiement = achevementTravauxPaiement;
    this.remiseClePaiement = remiseClePaiement;
    this.statutPaiement = statutPaiement;
    this.dateDernierPaiement = dateDernierPaiement;
  }
}

@Component({
  selector: 'app-suiviPaiement',
  templateUrl: './suiviPaiement.page.html',
  styleUrls: ['./suiviPaiement.page.scss'],
})
export class SuiviPaiementPage implements OnInit {
  
  data: string;
  error: string;
  currentDate = new Date();
  commandeListe: any = [];
  commande: commande = new commande(0,0,null,null,null,null,null,null,null,null,null,this.currentDate);
  total: number;
  prix: number;
  valeur : number;

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
      const dataUrl = 'http://maderaproject.com/api/maderaapi/paiement/read.php';
      return this.httpClient.get(dataUrl);
    }

    private prepareDataRequestOne(dat: number): Observable<object> {
      const dataUrlOne = `http://maderaproject.com/api/maderaapi/paiement/read_one.php?commandeId=${dat}`;
      return this.httpClient.get(dataUrlOne);
      
    }
  
  ngOnInit() {
  
  }

  UpdatePage($event){
    var data : number = $event.target.value;
    console.log(data)
    this.prepareDataRequestOne(data).subscribe(
      (data: commande) => {
        this.commande = data;
        console.log(this.commande);
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

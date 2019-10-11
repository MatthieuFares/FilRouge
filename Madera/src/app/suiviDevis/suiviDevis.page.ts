import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

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
  private prepareDataRequestOne(dat: any): Observable<object> {
    
    const dataUrlOne = `http://maderaproject.com/api/maderaapi/devis/read_one.php?devisId=${dat.idDevis}`;
    return this.httpClient.put(dataUrlOne, {
      prixDevis: dat.prixDevis, 
      etatDevis: dat.etatDevis, 
      dateDevis: dat.dateDevis, 
      dateEvolutionDevis: dat.dateEvolutionDevis, 
      avancementDevisByUserId: dat.avancementDevisByUserId,
      idDossier: dat.idDossier,
      idMaison: dat.idMaison,
      idDevis: dat.idDevis
    });
  }

  checkEventValider(dat: any) {
    dat.prixDevis = dat.prixDevis;
    dat.etatDevis = "1";
    dat.dateDevis = dat.dateDevis;
    dat.dateEvolutionDevis =  formatDate(new Date(), 'yyyy-MM-dd', 'en');
    dat.avancementDevisByUserId = dat.avancementDevisByUserId;
    dat.idDossier = dat.idDossier;
    dat.idMaison = dat.idMaison;
    dat.idDevis = dat.idDevis;

    this.prepareDataRequestOne(dat).subscribe (data=>{
      console.log(data);
    }
      )
  }

  checkEventRefuser(dat: any) {
    dat.prixDevis = dat.prixDevis;
    dat.etatDevis = "2";
    dat.dateDevis = dat.dateDevis;
    dat.dateEvolutionDevis =  formatDate(new Date(), 'yyyy-MM-dd', 'en');
    dat.avancementDevisByUserId = dat.avancementDevisByUserId;
    dat.idDossier = dat.idDossier;
    dat.idMaison = dat.idMaison;
    dat.idDevis = dat.idDevis;

    this.prepareDataRequestOne(dat).subscribe (
      
    )
    console.log(dat);
  }


  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }
}

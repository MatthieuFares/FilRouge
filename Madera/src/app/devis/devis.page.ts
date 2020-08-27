import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { formatDate } from '@angular/common';

export class devis {
  idDevis : number;
  nomClient : string;
  nbMur : number;
  nbMC : number;
  nbFenetre : number;
  typeDeBois : string;
  prix : number;

  constructor(idDevis:number, nomClient:string, nbMur:number, nbMC:number, nbFenetre:number, typeDeBois:string, prix:number){
    this.idDevis = idDevis;
    this.nomClient = nomClient;
    this.nbMur = nbMur;
    this.nbMC = nbMC;
    this.nbFenetre = nbFenetre;
    this.typeDeBois = typeDeBois;
    this.prix = prix;
  }
}


@Component({
  selector: 'app-creer',
  templateUrl: './devis.page.html',
  styleUrls: ['./devis.page.scss'],
})
export class DevisPage implements OnInit {
  selectMursExt = '';
  selectMursInt = '';
  selectDoorExt = '';
  selectDoorInt = '';
  selectWindows = '';

  data: string;
  error: string;

  devisListe: devis[];
  mursExtPrix: number;
  mursIntPrix:number;
  fenetresPrix: number;
  portesExtPrix: number;
  portesIntPrix: number;
  PrixMais: number;
  pdfObj: any;
  montxt : string;
  monDevis : devis = new devis(0,null,0,0,0,null,0);
  v : number;

  constructor(
    private authService: AuthenticationService,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private httpClient: HttpClient
    ) {
      this.data = '';
      this.error = '';
    }

  ionViewWillEnter() {
    this.prepareDataRequest().subscribe(
      (devis: any) => {
        this.devisListe = devis.data;
        console.log(this.devisListe);
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

  private prepareDataRequestOne(dat: number): Observable<object> {
    const dataUrlOne = `http://maderaproject.com/api/maderaapi/devis/read_one.php?devisId=${dat}`;
    return this.httpClient.get(dataUrlOne);
  }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }

  createPDF(id : number){
    var myID : number = id -1;
    this.monDevis = this.devisListe[myID];
    console.log(this.monDevis);
    var docDefinition = {
      content: [
        { text: 'Devis Maison Modulaire', style: 'header', alignment: 'center'},
        { text: formatDate(new Date(), 'dd/MM/yyyy', 'en'), alignment: 'right' },
 
        { text: 'Agent : SUSU', style: 'subheader' },
        { text: 'Numero : 123456789' },
 
        { text: 'Client', style: 'subheader' },
        {text: this.monDevis.nomClient, alignment:'center', style: 'subheader'},
        { text: 'Nombre de murs Extérieurs :'},
        { text: this.monDevis.nbMur, alignment:'center'},
        { text:' '},
        { text: 'Nombre de murs Intérieurs :'},
        { text: this.monDevis.nbMC,alignment:'center'},
        { text:' '},
        { text: 'Nombre de fenêtres :'},
        { text: this.monDevis.nbFenetre,alignment:'center'},
        { text:' '},
        { text: 'Type de Bois :'},
        { text: this.monDevis.typeDeBois,alignment:'center'},
        { text:' '},
        { text: 'Prix Devis:', style: 'subheader',alignment: 'right'},
        { text: this.monDevis.prix+' €', alignment: 'right', style: 'subheader'}

      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }
 
  downloadPdf(id : number) {
    this.createPDF(id);
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myDevis.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myDevis.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PickerController, Platform } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.page.html',
  styleUrls: ['./creer.page.scss'],
})
export class CreerPage implements OnInit {
  selectMursExt = '';
  selectMursInt = '';
  selectDoorExt = '';
  selectDoorInt = '';
  selectWindows = '';

  @Input() FormDevis: FormGroup;

  mursExtPrix: number;
  mursIntPrix:number;
  fenetresPrix: number;
  portesExtPrix: number;
  portesIntPrix: number;
  PrixMais: number;
  pdfObj: any;
  montxt : string;

  constructor(
    private authService: AuthenticationService,
    public FormBuilder: FormBuilder,
    private pickerCtrl: PickerController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener)
     {
      this.FormDevis = FormBuilder.group({
        mursExt: ['', Validators.required],
        mursInt:[''],
        portesExt: ['', Validators.required],
        portesInt:[''],
        fenetres: ['', Validators.required],
        tailleMurExt:[''],
        tailleMurInt:['']
      });
}

  async pickerMursExt() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Retour',
          role: 'retour'
        },
        {
          text: 'Valider'
        }
      ],
      columns: [
        {
          name: 'selectMursExt',
          options: [
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('selectMursExt');
      console.log('col: ', col);
      this.selectMursExt = col.options[col.selectedIndex].text;
    })
  }

  async pickerMursInt() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Retour',
          role: 'retour'
        },
        {
          text: 'Valider'
        }
      ],
      columns: [
        {
          name: 'selectMursInt',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('selectMursInt');
      console.log('col: ', col);
      this.selectMursInt = col.options[col.selectedIndex].text;
    })
  }

  async pickerDoorExt() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Retour',
          role: 'retour'
        },
        {
          text: 'Valider'
        }
      ],
      columns: [
        {
          name: 'selectDoorExt',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('selectDoorExt');
      console.log('col: ', col);
      this.selectDoorExt = col.options[col.selectedIndex].text;
    })
  }

  async pickerDoorInt() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Retour',
          role: 'retour'
        },
        {
          text: 'Valider'
        }
      ],
      columns: [
        {
          name: 'selectDoorInt',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('selectDoorInt');
      console.log('col: ', col);
      this.selectDoorInt = col.options[col.selectedIndex].text;
    })
  }

  async pickerWindows() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Retour',
          role: 'retour'
        },
        {
          text: 'Valider'
        }
      ],
      columns: [
        {
          name: 'selectWindows',
          options: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('selectWindows');
      console.log('col: ', col);
      this.selectWindows = col.options[col.selectedIndex].text;
    })
  }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logout();
  }

  estimate(){
    this.mursExtPrix = 100,
    this.mursIntPrix = 80,
    this.fenetresPrix = 60,
    this.portesExtPrix = 100,
    this.portesIntPrix = 50

    this.PrixMais = (parseInt(this.selectMursExt)*parseInt(this.FormDevis.value['tailleMurExt'])*this.mursExtPrix)+(parseInt(this.selectMursInt)*parseInt(this.FormDevis.value['tailleMurInt'])*this.mursIntPrix)+(parseInt(this.selectDoorExt)*this.portesExtPrix)+(parseInt(this.selectDoorInt)*this.portesIntPrix)+(parseInt(this.selectWindows)*this.fenetresPrix);
    console.log(this.PrixMais);
    this.montxt = this.PrixMais.toString();
  }

  createPdf() {
    this.estimate();
    this.mursExtPrix = parseInt(this.selectMursExt)*parseInt(this.FormDevis.value['tailleMurExt'])*this.mursExtPrix,
    this.mursIntPrix = parseInt(this.selectMursInt)*parseInt(this.FormDevis.value['tailleMurInt'])*this.mursIntPrix,
    this.fenetresPrix = parseInt(this.selectWindows)*this.fenetresPrix,
    this.portesExtPrix = parseInt(this.selectDoorExt)*this.portesExtPrix,
    this.portesIntPrix = parseInt(this.selectDoorInt)*this.portesIntPrix
    var docDefinition = {
      content: [
        //{ image: "../../assets/img/logo.png"},
        { text: 'Devis Maison Modulaire', style: 'header', alignment: 'center'},
        { text: formatDate(new Date(), 'dd/MM/yyyy', 'en'), alignment: 'right' },
 
        { text: 'Agent : SUSU', style: 'subheader' },
        { text: 'Numero : 123456789' },
 
        { text: 'Client', style: 'subheader' },
        
        { text: 'Nombre de murs Extérieurs :'},
        { text: this.selectMursExt, alignment:'center'},
        { text: 'Taille murs Extérieurs :'},
        { text: this.FormDevis.value['tailleMurExt'],alignment:'center'},
        { text: 'Prix murs Extérieurs :',alignment: 'right'},
        { text: this.mursExtPrix, alignment: 'right'},
        { text:' '},
        { text: 'Nombre de murs Intérieurs :'},
        { text: this.selectMursInt,alignment:'center'},
        { text: 'Taille murs Intérieurs :'},
        { text: this.FormDevis.value['tailleMurInt'],alignment:'center'},
        { text: 'Prix murs Extérieurs :',alignment: 'right'},
        { text: this.mursIntPrix, alignment: 'right'},
        { text:' '},
        { text: 'Nombre de portes Extérieurs :'},
        { text: this.selectDoorExt,alignment:'center'},
        { text: 'Prix portes Extérieurs :',alignment: 'right'},
        { text: this.portesExtPrix, alignment: 'right'},
        { text:' '},
        { text: 'Nombre de portes Intérieurs :'},
        { text: this.selectDoorInt,alignment:'center'},
        { text: 'Prix portes Intérieurs :',alignment: 'right'},
        { text: this.portesIntPrix, alignment: 'right'},
        { text:' '},
        { text: 'Nombre de fenêtres :'},
        { text: this.selectWindows,alignment:'center'},
        { text: 'Prix fenêtres :',alignment: 'right'},
        { text: this.fenetresPrix, alignment: 'right'},
        { text:' '},
        { text: 'Prix Devis:', style: 'subheader',alignment: 'right'},
        { text: this.montxt, alignment: 'right', style: 'subheader'}

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
 
  downloadPdf() {
    this.createPdf();
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

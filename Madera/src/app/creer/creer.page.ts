import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { TouchSequence } from 'selenium-webdriver';

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

  constructor(
    private authService: AuthenticationService,
    public FormBuilder: FormBuilder,
    private pickerCtrl: PickerController
    ) {
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
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' }
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
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' }
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
            { text: '4', value: '4' }
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
            { text: '4', value: '4' }
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
            { text: '4', value: '4' }
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
  }

}

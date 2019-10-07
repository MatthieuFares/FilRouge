import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

import { pageSupprimer } from '../../pages/supprimer/supprimer';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class HomePage {
  pageSupprimer: any;

  constructor(public navCtrl: NavController) { 
      this.pageSupprimer = pageSupprimer;
  }

  private showSupprimer() {
    this.navCtrl.navigateForward('pageSupprimer');
  }
}


import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class  MenuPage {
  pageSupprimer: any;

  constructor(public navCtrl: NavController) { 
  }

  private showSupprimer() {
    this.navCtrl.navigateForward('pageSupprimer');
  }
}


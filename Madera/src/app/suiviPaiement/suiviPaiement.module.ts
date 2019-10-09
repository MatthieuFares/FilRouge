import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiviPaiementPage } from './suiviPaiement.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviPaiementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiviPaiementPage]
})
export class SuiviPaiementPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiviDevisPage } from './suiviDevis.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviDevisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiviDevisPage]
})
export class SuiviDevisPageModule {}

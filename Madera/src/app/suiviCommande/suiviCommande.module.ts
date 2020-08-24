import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiviCommandePage } from './suiviCommande.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviCommandePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiviCommandePage]
})
export class SuiviCommandePageModule {}

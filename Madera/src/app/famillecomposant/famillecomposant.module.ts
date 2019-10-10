import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamilleComposantPage } from './familleComposant.page';

const routes: Routes = [
  {
    path: '',
    component: FamilleComposantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamilleComposantPage]
})
export class FamilleComposantPageModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-Guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule'},
  { path: 'modalitePaiement', loadChildren: './modalitePaiement/modalitePaiement.module#ModalitePaiementPageModule' },
  { path: 'suiviPaiement', loadChildren: './suiviPaiement/suiviPaiement.module#SuiviPaiementPageModule' },
  { path: 'suiviDevis', loadChildren: './suiviDevis/suiviDevis.module#SuiviDevisPageModule' },
  { path: 'administration', loadChildren: './administration/administration.module#AdministrationPageModule' },
  { path: 'client', loadChildren: './client/client.module#ClientPageModule' },
  { path: 'fournisseur', loadChildren: './fournisseur/fournisseur.module#FournisseurPageModule' },
  { path: 'composant', loadChildren: './composant/composant.module#ComposantPageModule' },
  { path: 'famillecomposant', loadChildren: './famillecomposant/famillecomposant.module#FamilleComposantPageModule' },
  { path: 'module', loadChildren: './module/module.module#ModulePageModule' },
  { path: 'stock', loadChildren: './stock/stock.module#StockPageModule' },
  { path: 'stock-detail/:id', loadChildren: './stock-detail/stock-detail.module#StockDetailPageModule' },
  { path: 'consultation', loadChildren: './consultation/consultation.module#ConsultationPageModule' },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

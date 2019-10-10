import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-Guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule'},
  { path: 'creer', loadChildren: './creer/creer.module#CreerPageModule' },
  { path: 'modalitePaiement', loadChildren: './modalitePaiement/modalitePaiement.module#ModalitePaiementPageModule' },
  { path: 'suiviPaiement', loadChildren: './suiviPaiement/suiviPaiement.module#SuiviPaiementPageModule' },
  { path: 'suiviDevis', loadChildren: './suiviDevis/suiviDevis.module#SuiviDevisPageModule' },
  { path: 'administration', loadChildren: './administration/administration.module#AdministrationPageModule' },
  { path: 'stock', loadChildren: './stock/stock.module#StockPageModule' },
  { path: 'stock-detail', loadChildren: './stock-detail/stock-detail.module#StockDetailPageModule' }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

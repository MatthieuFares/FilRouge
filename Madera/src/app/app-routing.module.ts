import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-Guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
<<<<<<< Updated upstream
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard]},
=======
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] }
>>>>>>> Stashed changes
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

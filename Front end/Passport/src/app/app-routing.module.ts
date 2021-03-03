import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./passport/passport.module').then(m => m.PassportPageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'covid-test',
    loadChildren: () => import('./covid-test/covid-test.module').then(m => m.CovidTestPageModule)
  },
  {
    path: 'vaccine-history',
    loadChildren: () => import('./vaccine-history/vaccine-history.module').then(m => m.VaccineHistoryPageModule)
  },
  {
    path: 'passport',
    loadChildren: () => import('./passport/passport.module').then(m => m.PassportPageModule)
  },  {
    path: 'covid-register',
    loadChildren: () => import('./covid-register/covid-register.module').then( m => m.CovidRegisterPageModule)
  },
  {
    path: 'vaccine-register',
    loadChildren: () => import('./vaccine-register/vaccine-register.module').then( m => m.VaccineRegisterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

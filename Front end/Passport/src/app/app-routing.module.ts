import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./passport/passport.module').then(m => m.PassportPageModule)
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
  },
  {
    path: 'covid-register',
    loadChildren: () => import('./covid-register/covid-register.module').then( m => m.CovidRegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-type',
    loadChildren: () => import('./user-type/user-type.module').then( m => m.UserTypePageModule)
  },
  {
    path: 'user-sign-up-name',
    loadChildren: () => import('./user-sign-up-name/user-sign-up-name.module').then( m => m.UserSignUpNamePageModule)
  },
  {
    path: 'user-sign-up-cred',
    loadChildren: () => import('./user-sign-up-cred/user-sign-up-cred.module').then( m => m.UserSignUpCredPageModule)
  },
  {
    path: 'id-upload',
    loadChildren: () => import('./id-upload/id-upload.module').then( m => m.IdUploadPageModule)
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

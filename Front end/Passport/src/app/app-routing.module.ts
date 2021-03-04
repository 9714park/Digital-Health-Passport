import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

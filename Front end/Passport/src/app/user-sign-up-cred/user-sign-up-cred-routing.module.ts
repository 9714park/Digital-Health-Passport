import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignUpCredPage } from './user-sign-up-cred.page';

const routes: Routes = [
  {
    path: '',
    component: UserSignUpCredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSignUpCredPageRoutingModule {}

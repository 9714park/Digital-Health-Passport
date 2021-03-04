import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignUpNamePage } from './user-sign-up-name.page';

const routes: Routes = [
  {
    path: '',
    component: UserSignUpNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSignUpNamePageRoutingModule {}

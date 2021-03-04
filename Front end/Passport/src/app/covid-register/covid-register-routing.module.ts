import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidRegisterPage } from './covid-register.page';

const routes: Routes = [
  {
    path: '',
    component: CovidRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidRegisterPageRoutingModule {}

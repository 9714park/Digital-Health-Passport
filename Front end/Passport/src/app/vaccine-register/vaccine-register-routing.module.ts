import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccineRegisterPage } from './vaccine-register.page';

const routes: Routes = [
  {
    path: '',
    component: VaccineRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccineRegisterPageRoutingModule {}

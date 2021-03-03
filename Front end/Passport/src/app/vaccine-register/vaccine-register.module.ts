import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccineRegisterPageRoutingModule } from './vaccine-register-routing.module';

import { VaccineRegisterPage } from './vaccine-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineRegisterPageRoutingModule
  ],
  declarations: [VaccineRegisterPage]
})
export class VaccineRegisterPageModule {}

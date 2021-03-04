import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidRegisterPageRoutingModule } from './covid-register-routing.module';

import { CovidRegisterPage } from './covid-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidRegisterPageRoutingModule
  ],
  declarations: [CovidRegisterPage]
})
export class CovidRegisterPageModule {}

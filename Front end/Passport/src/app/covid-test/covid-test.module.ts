import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidTestPageRoutingModule } from './covid-test-routing.module';

import { CovidTestPage } from './covid-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidTestPageRoutingModule
  ],
  declarations: [CovidTestPage]
})
export class CovidTestPageModule {}

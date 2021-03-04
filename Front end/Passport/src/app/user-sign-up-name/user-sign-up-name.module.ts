import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSignUpNamePageRoutingModule } from './user-sign-up-name-routing.module';

import { UserSignUpNamePage } from './user-sign-up-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSignUpNamePageRoutingModule
  ],
  declarations: [UserSignUpNamePage]
})
export class UserSignUpNamePageModule {}

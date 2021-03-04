import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSignUpCredPageRoutingModule } from './user-sign-up-cred-routing.module';

import { UserSignUpCredPage } from './user-sign-up-cred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSignUpCredPageRoutingModule
  ],
  declarations: [UserSignUpCredPage]
})
export class UserSignUpCredPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdUploadPageRoutingModule } from './id-upload-routing.module';

import { IdUploadPage } from './id-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdUploadPageRoutingModule
  ],
  declarations: [IdUploadPage]
})
export class IdUploadPageModule {}

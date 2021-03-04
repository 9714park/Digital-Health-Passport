import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdUploadPage } from './id-upload.page';

const routes: Routes = [
  {
    path: '',
    component: IdUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdUploadPageRoutingModule {}

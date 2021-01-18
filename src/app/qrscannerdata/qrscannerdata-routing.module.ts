import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrscannerdataPage } from './qrscannerdata.page';

const routes: Routes = [
  {
    path: 'qrtest',
    component: QrscannerdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrscannerdataPageRoutingModule {}

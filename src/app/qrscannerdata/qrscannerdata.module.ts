import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrscannerdataPageRoutingModule } from './qrscannerdata-routing.module';

import { QrscannerdataPage } from './qrscannerdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrscannerdataPageRoutingModule
  ],
  declarations: [QrscannerdataPage]
})
export class QrscannerdataPageModule {}

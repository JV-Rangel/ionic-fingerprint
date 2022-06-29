import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongrPageRoutingModule } from './congr-routing.module';

import { CongrPage } from './congr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongrPageRoutingModule
  ],
  declarations: [CongrPage]
})
export class CongrPageModule {}

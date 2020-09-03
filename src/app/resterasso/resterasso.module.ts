import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResterassoPageRoutingModule } from './resterasso-routing.module';

import { ResterassoPage } from './resterasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResterassoPageRoutingModule
  ],
  declarations: [ResterassoPage]
})
export class ResterassoPageModule {}

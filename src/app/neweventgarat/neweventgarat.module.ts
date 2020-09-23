import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeweventgaratPageRoutingModule } from './neweventgarat-routing.module';

import { NeweventgaratPage } from './neweventgarat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeweventgaratPageRoutingModule
  ],
  declarations: [NeweventgaratPage]
})
export class NeweventgaratPageModule {}

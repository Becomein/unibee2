import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterbenePageRoutingModule } from './registerbene-routing.module';

import { RegisterbenePage } from './registerbene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterbenePageRoutingModule
  ],
  declarations: [RegisterbenePage]
})
export class RegisterbenePageModule {}

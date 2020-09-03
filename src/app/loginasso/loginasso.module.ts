import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginassoPageRoutingModule } from './loginasso-routing.module';

import { LoginassoPage } from './loginasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginassoPageRoutingModule
  ],
  declarations: [LoginassoPage]
})
export class LoginassoPageModule {}

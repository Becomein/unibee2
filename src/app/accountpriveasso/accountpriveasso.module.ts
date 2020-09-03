import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountpriveassoPageRoutingModule } from './accountpriveasso-routing.module';

import { AccountpriveassoPage } from './accountpriveasso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountpriveassoPageRoutingModule
  ],
  declarations: [AccountpriveassoPage]
})
export class AccountpriveassoPageModule {}

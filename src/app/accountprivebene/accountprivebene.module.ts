import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountprivebenePageRoutingModule } from './accountprivebene-routing.module';

import { AccountprivebenePage } from './accountprivebene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountprivebenePageRoutingModule
  ],
  declarations: [AccountprivebenePage]
})
export class AccountprivebenePageModule {}

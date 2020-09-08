import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountassomodifPageRoutingModule } from './accountassomodif-routing.module';

import { AccountassomodifPage } from './accountassomodif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountassomodifPageRoutingModule
  ],
  declarations: [AccountassomodifPage]
})
export class AccountassomodifPageModule {}

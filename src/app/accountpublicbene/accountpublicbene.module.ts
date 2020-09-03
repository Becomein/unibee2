import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountpublicbenePageRoutingModule } from './accountpublicbene-routing.module';

import { AccountpublicbenePage } from './accountpublicbene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountpublicbenePageRoutingModule
  ],
  declarations: [AccountpublicbenePage]
})
export class AccountpublicbenePageModule {}

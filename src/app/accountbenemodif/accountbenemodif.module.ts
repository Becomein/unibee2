import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountbenemodifPageRoutingModule } from './accountbenemodif-routing.module';

import { AccountbenemodifPage } from './accountbenemodif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountbenemodifPageRoutingModule
  ],
  declarations: [AccountbenemodifPage]
})
export class AccountbenemodifPageModule {}

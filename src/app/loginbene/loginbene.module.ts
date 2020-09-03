import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginbenePageRoutingModule } from './loginbene-routing.module';

import { LoginbenePage } from './loginbene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginbenePageRoutingModule
  ],
  declarations: [LoginbenePage]
})
export class LoginbenePageModule {}

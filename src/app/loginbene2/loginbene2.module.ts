import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loginbene2PageRoutingModule } from './loginbene2-routing.module';

import { Loginbene2Page } from './loginbene2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loginbene2PageRoutingModule
  ],
  declarations: [Loginbene2Page]
})
export class Loginbene2PageModule {}

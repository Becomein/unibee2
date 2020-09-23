import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab33PageRoutingModule } from './tab33-routing.module';

import { Tab33Page } from './tab33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab33PageRoutingModule
  ],
  declarations: [Tab33Page]
})
export class Tab33PageModule {}

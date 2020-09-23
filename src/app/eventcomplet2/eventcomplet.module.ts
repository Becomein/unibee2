import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventcompletPageRoutingModule } from './eventcomplet-routing.module';

import { EventcompletPage } from './eventcomplet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventcompletPageRoutingModule
  ],
  declarations: [EventcompletPage]
})
export class EventcompletPageModule {}

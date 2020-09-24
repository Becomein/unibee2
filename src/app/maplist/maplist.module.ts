import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaplistPageRoutingModule } from './maplist-routing.module';

import { MaplistPage } from './maplist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaplistPageRoutingModule
  ],
  declarations: [MaplistPage]
})
export class MaplistPageModule {}

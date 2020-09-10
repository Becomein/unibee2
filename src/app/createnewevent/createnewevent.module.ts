import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateneweventPageRoutingModule } from './createnewevent-routing.module';

import { CreateneweventPage } from './createnewevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateneweventPageRoutingModule
  ],
  declarations: [CreateneweventPage]
})
export class CreateneweventPageModule {}

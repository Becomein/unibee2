import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateneweventPage } from './createnewevent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateneweventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateneweventPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaplistPage } from './maplist.page';

const routes: Routes = [
  {
    path: '',
    component: MaplistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaplistPageRoutingModule {}

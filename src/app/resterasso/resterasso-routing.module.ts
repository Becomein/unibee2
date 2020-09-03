import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResterassoPage } from './resterasso.page';

const routes: Routes = [
  {
    path: '',
    component: ResterassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResterassoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab33Page } from './tab33.page';

const routes: Routes = [
  {
    path: '',
    component: Tab33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab33PageRoutingModule {}

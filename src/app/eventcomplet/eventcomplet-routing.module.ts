import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventcompletPage } from './eventcomplet.page';

const routes: Routes = [
  {
    path: '',
    component: EventcompletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventcompletPageRoutingModule {}

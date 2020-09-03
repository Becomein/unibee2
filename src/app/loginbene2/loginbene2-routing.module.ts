import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loginbene2Page } from './loginbene2.page';

const routes: Routes = [
  {
    path: '',
    component: Loginbene2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loginbene2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterbenePage } from './registerbene.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterbenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterbenePageRoutingModule {}

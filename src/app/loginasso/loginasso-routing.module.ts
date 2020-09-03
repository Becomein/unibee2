import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginassoPage } from './loginasso.page';

const routes: Routes = [
  {
    path: '',
    component: LoginassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginassoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginbenePage } from './loginbene.page';

const routes: Routes = [
  {
    path: '',
    component: LoginbenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginbenePageRoutingModule {}

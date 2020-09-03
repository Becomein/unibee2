import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpriveassoPage } from './accountpriveasso.page';

const routes: Routes = [
  {
    path: '',
    component: AccountpriveassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountpriveassoPageRoutingModule {}

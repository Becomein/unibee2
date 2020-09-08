import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountassomodifPage } from './accountassomodif.page';

const routes: Routes = [
  {
    path: '',
    component: AccountassomodifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountassomodifPageRoutingModule {}

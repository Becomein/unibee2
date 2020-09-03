import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpublicassoPage } from './accountpublicasso.page';

const routes: Routes = [
  {
    path: '',
    component: AccountpublicassoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountpublicassoPageRoutingModule {}

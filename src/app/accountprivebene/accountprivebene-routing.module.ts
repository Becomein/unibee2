import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountprivebenePage } from './accountprivebene.page';

const routes: Routes = [
  {
    path: '',
    component: AccountprivebenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountprivebenePageRoutingModule {}

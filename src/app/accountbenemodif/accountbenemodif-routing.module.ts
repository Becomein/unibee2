import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountbenemodifPage } from './accountbenemodif.page';

const routes: Routes = [
  {
    path: '',
    component: AccountbenemodifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountbenemodifPageRoutingModule {}

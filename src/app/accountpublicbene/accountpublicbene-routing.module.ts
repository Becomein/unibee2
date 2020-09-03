import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpublicbenePage } from './accountpublicbene.page';

const routes: Routes = [
  {
    path: '',
    component: AccountpublicbenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountpublicbenePageRoutingModule {}

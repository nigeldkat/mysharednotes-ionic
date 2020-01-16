import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDataPage } from './user-data';

const routes: Routes = [
  {
    path: '',
    component: UserDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataPageRoutingModule { }
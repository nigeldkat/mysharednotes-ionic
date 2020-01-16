import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPage } from './account';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: 'password',
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }

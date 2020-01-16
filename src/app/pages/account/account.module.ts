import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
import { ChangePasswordModule } from './change-password/change-password.module';
//import { ChangePasswordPage } from './change-password/change-password';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountPageRoutingModule,
    ChangePasswordModule
  ],
  declarations: [
    AccountPage,
  ]
})
export class AccountModule { }

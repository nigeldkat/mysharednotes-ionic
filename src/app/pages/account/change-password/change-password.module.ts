import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordPage } from './change-password';
import { ChangePasswordPageRoutingModule } from './change-password-routing.module';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChangePasswordPageRoutingModule
  ],
  declarations: [
    ChangePasswordPage,
  ]
})
export class ChangePasswordModule { }
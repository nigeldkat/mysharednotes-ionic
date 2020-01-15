import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ResetPasswordPage } from './reset-password';
import { ResetPasswordPageRoutingModule } from './reset-password-rounting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule
  ],
  declarations: [
    ResetPasswordPage
  ]
})
export class ResetPasswordModule { }
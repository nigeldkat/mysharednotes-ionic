import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { UserDataPage } from './user-data';
import { UserInfoPageRoutingModule } from '../user-info.routing.module';

@NgModule({
  imports: [      
    CommonModule,
    IonicModule,
    UserInfoPageRoutingModule
  ],
  declarations: [
    UserDataPage,
  ]
})
export class UserDataModule { }
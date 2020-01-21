import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserInfoPage } from './user-info';
import { UesrInfoPageRoutingModule } from './user-info.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UesrInfoPageRoutingModule
  ],
  declarations: [
    UserInfoPage
  ]
})
export class UserInfoPageModule { }
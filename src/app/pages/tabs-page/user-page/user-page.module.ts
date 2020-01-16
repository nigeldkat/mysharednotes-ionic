import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserPage } from './user-page';
import { UserPageRoutingModule } from './user-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule
  ],
  declarations: [
    UserPage
  ]
})
export class UserPageModule { }
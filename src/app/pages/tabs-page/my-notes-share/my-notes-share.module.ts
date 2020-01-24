import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyNotesSharePage } from './my-notes-share';
import { MyNotesSharePageRoutingModule } from './my-notes-share.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesSharePageRoutingModule
  ],
  declarations: [
    MyNotesSharePage
  ]
})
export class MyNotesSharePageModule { }
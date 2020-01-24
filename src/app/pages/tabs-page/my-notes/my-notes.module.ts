import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyNotesPage } from './my-notes';
import { MyNotesPageRoutingModule } from './my-notes.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesPageRoutingModule
  ],
  declarations: [
    MyNotesPage
  ]
})
export class MyNotesPageModule { }
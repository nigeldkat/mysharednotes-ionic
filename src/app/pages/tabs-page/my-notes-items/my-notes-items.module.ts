import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyNotesItemsPageRoutingModule } from './my-notes-items.routing.module';
import { MyNotesItemsPage } from './my-notes-items';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesItemsPageRoutingModule
  ],
  declarations: [
    MyNotesItemsPage
  ]
})
export class MyNotesItemsPageModule { }
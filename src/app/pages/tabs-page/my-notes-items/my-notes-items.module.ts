import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyNotesItemsPageRoutingModule } from './my-notes-items.routing.module';
import { MyNotesItemsPage } from './my-notes-items';
import { MyNotesItemComponent} from './my-notes-item';
import { MyNotesAddItemComponent } from './my-notes-add-item';
import { MyNotesEditModalComponent } from './my-notes-edit-modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesItemsPageRoutingModule
  ],
  declarations: [
    MyNotesItemsPage,
    MyNotesItemComponent,
    MyNotesAddItemComponent,
    MyNotesEditModalComponent
  ],
  entryComponents: [
    MyNotesEditModalComponent
  ]
})
export class MyNotesItemsPageModule { }
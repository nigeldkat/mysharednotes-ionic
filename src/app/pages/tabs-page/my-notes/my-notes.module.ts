import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyNotesPage } from './my-notes';
import { MyNotesPageRoutingModule } from './my-notes.router.module';
import { MyNotesAddNoteComponent } from './my-notes-add-note';
import { MyNotesNoteComponent } from './my-notes-note';
import { MyNotesEditNoteModalComponent } from './my-notes-edit-note-modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNotesPageRoutingModule
  ],
  declarations: [
    MyNotesPage,
    MyNotesAddNoteComponent,
    MyNotesNoteComponent,
    MyNotesEditNoteModalComponent
  ],
  entryComponents: [
    MyNotesEditNoteModalComponent
  ]
})
export class MyNotesPageModule { }
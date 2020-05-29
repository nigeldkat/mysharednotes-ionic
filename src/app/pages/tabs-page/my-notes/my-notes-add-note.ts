import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MyNotesService } from './my-notes.service';

@Component({
    selector: 'my-notes-add-note',
    templateUrl: 'my-notes-add-note.html',
    styleUrls: ['./my-notes.scss'],
})
export class MyNotesAddNoteComponent implements OnInit  {
   
    @Input() id: string;
    @Input() desc: string;
    newListName = '';
    submitted = false;
    btnLabel: string;

    constructor(private noteService: MyNotesService) {  }

    ngOnInit(){
        if(this.id ){
            this.btnLabel = 'Edit Note';
            this.newListName = this.desc;
        } else {
            this.btnLabel = 'Add Note';
        }
    }    

    onSaveList(addItemsForm: NgForm): void {
        this.submitted = true;
        if (addItemsForm.valid) {
            if(this.id){
                this.noteService.editNoteItem(this.id, this.newListName);
            } else {
                this.noteService.addNewList(this.newListName);
                this.submitted = false;
                addItemsForm.resetForm();
            }
        }
    }  
}
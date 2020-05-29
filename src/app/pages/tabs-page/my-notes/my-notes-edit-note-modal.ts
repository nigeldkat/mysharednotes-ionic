import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { MyNotesService } from './my-notes.service';

@Component({
    selector: 'my-notes-edit-note-modal',
    templateUrl: 'my-notes-edit-note-modal.html'
})
export class MyNotesEditNoteModalComponent implements OnInit {
    @Input() id: string;
    @Input() desc: string;
    @Input() listId: string

    exitModal$: Subscription;

    constructor(private modalCtl: ModalController, private noteService: MyNotesService) { }

    ngOnInit(){
        this.exitModal$ = this.noteService.exitNoteEditModal.subscribe({
            next: (data) => {
                if(data === true){
                    this.dismissModal();
                }
            }
        });
    }
    dismissModal() {
        this.exitModal$.unsubscribe();
        this.modalCtl.dismiss({
            'dismissed': true
        });
    }

}
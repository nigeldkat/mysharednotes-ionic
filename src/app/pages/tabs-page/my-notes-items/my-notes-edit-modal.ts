import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { MyNotesItemsService } from './my-notes-items.service';

@Component({
    selector: 'my-notes-edit-modal',
    templateUrl: 'my-notes-edit-modal.html'
})
export class MyNotesEditModalComponent implements OnInit {
    @Input() id: string;
    @Input() desc: string;
    @Input() listId: string

    exitModal$: Subscription;

    constructor(private modalCtl: ModalController, private itemService: MyNotesItemsService) { }

    ngOnInit(){
        this.exitModal$ = this.itemService.exitEditModal.subscribe({
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
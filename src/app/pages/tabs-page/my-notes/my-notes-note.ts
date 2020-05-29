import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { MyNotesEditNoteModalComponent } from './my-notes-edit-note-modal';
import { MyNotesService } from './my-notes.service';

@Component({
    selector: 'my-notes-note',
    templateUrl: 'my-notes-note.html',
    styleUrls: ['./my-notes.scss'],
})
export class MyNotesNoteComponent {

    showEdit = true;    
    @Input() id: string;
    @Input() desc: string;

    constructor(
      private alertController: AlertController, 
      private noteService: MyNotesService, 
      public modalController: ModalController) {  }

    async onEdit(itemId: string, itemDesc: string) {
        const modal = await this.modalController.create({
          component: MyNotesEditNoteModalComponent,
          componentProps: {
            'id': itemId,
            'desc': itemDesc
          }
        });
        return await modal.present();
      }

      async onDelete(id: string) {
        const alert = await this.alertController.create({
          header: 'Delete',
          message: 'Are you sure?',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => { }
          }, {
            text: 'Ok',
            handler: () => {
              this.noteService.deleteList(id);
            }
          }]
        });
    
        await alert.present();
      }

}
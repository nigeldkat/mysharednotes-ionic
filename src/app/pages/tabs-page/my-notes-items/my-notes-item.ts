import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MyNotesItemsService } from './my-notes-items.service';
import { MyNotesEditModalComponent } from './my-notes-edit-modal';

@Component({
    selector: 'my-notes-item',
    templateUrl: 'my-notes-item.html',
    styleUrls: ['./my-notes-items.scss'],
})
export class MyNotesItemComponent {

    showEdit = true;
    
    @Input() id: string;
    @Input() desc: string;
    @Input() listId: string

    constructor(private itemService: MyNotesItemsService, public modalController: ModalController) {  }

    async onEdit(itemId: string, itemDesc: string) {
        const modal = await this.modalController.create({
          component: MyNotesEditModalComponent,
        //   cssClass: 'my-custom-class',
          componentProps: {
            'id': itemId,
            'desc': itemDesc,
            'listId': this.listId
          }
        });
        return await modal.present();
      }

    onDelete(itemId: string): void {
        this.itemService.deleteListItem(this.listId, itemId);
    }

}
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MyNotesItemsService } from './my-notes-items.service';

@Component({
    selector: 'my-notes-add-item',
    templateUrl: 'my-notes-add-item.html',
    styleUrls: ['./my-notes-items.scss'],
})
export class MyNotesAddItemComponent implements OnInit  {
   
    @Input() id: string;
    @Input() desc: string;
    @Input() listId: string
    newListItem = '';
    submitted = false;
    btnLabel: string;

    constructor(private itemService: MyNotesItemsService) {  }

    ngOnInit(){
        if(this.id ){
            this.btnLabel = 'Edit Item';
            this.newListItem = this.desc;
        } else {
            this.btnLabel = 'Add Item';
        }
    }    

    onSaveItem(addItemsForm: NgForm): void {
        this.submitted = true;
        if (addItemsForm.valid) {
            if(this.id){
                this.itemService.editListItem(this.listId, this.id, this.newListItem);
            } else {
                this.itemService.addListItem(this.listId, this.newListItem);
                this.submitted = false;
                addItemsForm.resetForm();
            }
        }
    }  
}
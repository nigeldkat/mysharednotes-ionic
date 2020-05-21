import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Item } from '../../../interfaces/noteItems.model';

import { MyNotesItemsService } from './my-notes-items.service';

@Component({
    templateUrl: 'my-notes-items.html',
    styleUrls: ['./my-notes-items.scss'],
})
export class MyNotesItemsPage {

    defaultHref = '';
    newListItem = '';
    noteDesc = '';
    @ViewChild('addItemsForm', { static: true }) addItemsForm: NgForm;
    submitted = false;
    showAdd = false;
    items: Array<[Item]> = [];
    private listId: string;


    constructor(private route: ActivatedRoute, private itemService: MyNotesItemsService) { }

    ionViewWillEnter() {
        this.listId = this.route.snapshot.paramMap.get('noteId');
        this.noteDesc = this.route.snapshot.paramMap.get('noteDesc');
        this.itemService.getList(this.listId).subscribe(
            (data) => {
                this.items = data;
            },
            (error) => '');
    }

    toggleShowAdd(){
        this.showAdd = !this.showAdd;
    }
    onCreateItem(addItemsForm: NgForm): void {
        this.submitted = true;
        if (addItemsForm.valid) {
            this.itemService.addListItem(this.listId, this.newListItem);
            this.submitted = false;
            addItemsForm.resetForm();
        }
    }

    onDelete(itemId: string): void {
        this.itemService.deleteListItem(this.listId, itemId);
    }

}
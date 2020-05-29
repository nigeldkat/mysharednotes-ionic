import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../../interfaces/noteItems.model';
import { MyNotesItemsService } from './my-notes-items.service';

@Component({
    templateUrl: 'my-notes-items.html',
    styleUrls: ['./my-notes-items.scss'],
})
export class MyNotesItemsPage {

    defaultHref = '';
    noteDesc = '';
    showAdd = false;
    items: Array<[Item]> = [];
    listId: string;


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

}
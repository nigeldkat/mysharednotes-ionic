import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../../../auth/auth.service';
import { Item } from '../../../interfaces/noteItems.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class MyNotesItemsService {

    exitEditModal = new Subject<boolean>();

    constructor(private authService: AuthService, private toastCtrl: ToastController) { }

    addListItem(listId: string, item: string) {

        const list = firebase.firestore().collection(`Lists/${listId}/Items`);
        const newItem = { Desc: item, SortDesc: item.toLowerCase() };

        list.add(newItem)
    }

    editListItem(listId: string, itemId: string, editedItem: string) {
        const item = firebase.firestore().doc(`Lists/${listId}/Items/${itemId}`).update(
            { Desc: editedItem, SortDesc: editedItem.toLowerCase() }
        );
        this.exitEditModal.next(true);
    }

    deleteListItem(listId: string, itemId: string) {
        const item = firebase.firestore().doc(`Lists/${listId}/Items/${itemId}`);
        item.delete();
    }

    getList(id: string): Observable<any> {
        return new Observable((observer) => {
            let itemList: Array<Item> = []

            const list = firebase.firestore().collection(`Lists/${id}/Items`)
                .orderBy('SortDesc');

            list.onSnapshot((snap) => {
                itemList = [];
                snap.forEach((doc) => {
                    itemList.push(
                        {
                            ID: doc.id,
                            Desc: doc.data().Desc
                        });
                });
                observer.next(itemList);
            }, (error) => {
                //do something about error
            });


        });
    }

}
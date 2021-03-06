import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../../../auth/auth.service';
import { NoteList } from '../../../interfaces/notelist.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class MyNotesService {


    constructor(private authService: AuthService, private toastCtrl: ToastController) {

    }

    addNewList(listName: string) {
        const uid :string = this.authService.currentUser.uid;
        let item: NoteList = {
            Creator : uid,
            Desc : listName,
            ID : 'tempid',
            Members : {[uid]: true}
        } 

        const listRef = firebase.firestore().collection(`Lists`);
        listRef.add(item).then( data => {
            const list = firebase.firestore().doc(`Lists/${data.id}`);
            item.ID = data.id;
            list.set(item, {merge: true});            
        });   
    }

    deleteList(id: string) {
        const list = firebase.firestore().doc(`Lists/${id}`);
        list.delete();
    }

    getLists(): Observable<any> {
        return new Observable((observer) => {
            let noteList: Array<any>;
            noteList = [];
            const currentUser = this.authService.currentUser;
            let listRef = firebase.firestore().collection(`Lists`);
            let query = listRef.where(`Members.${currentUser.uid}`, '==', true)
            query.onSnapshot((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    noteList.push(
                        {
                            id: doc.id,
                            ID: doc.data().ID,
                            Desc: doc.data().Desc,
                            Creator: doc.data().Creator
                        }
                    );
                }, (error) => {
                    console.log(error);
                });
                observer.next(noteList);
                noteList = [];
            });
        });
    }



}





import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../../../auth/auth.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class MyNotesService {


    constructor(private authService: AuthService, private toastCtrl: ToastController) {

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
            });
        });
    }

}





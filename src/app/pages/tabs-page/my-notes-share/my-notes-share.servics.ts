import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../../../auth/auth.service';
import { NoteList } from '../../../interfaces/notelist.model';
import { ListWithMembers } from './list-with-members.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class MyNotesShareService {
    listWithMembers: ListWithMembers;

    constructor(private authService: AuthService, private toastCtrl: ToastController) {}

    addMember(emailAddress: string, listId: string ): Observable<any> {
        return new Observable((observer)=>{

            let userID: string = '';
            let listRef = firebase.firestore().collection(`users`);
            let query = listRef.where(`email`.toLowerCase(), '==', emailAddress.toLowerCase())

            query.onSnapshot((snap) => {
                if(snap.empty === false){
                    snap.forEach((doc) => {
                        userID = doc.data().uid;
                        this.updateList(listId, userID);
                        observer.next('Person added to List.');
                    });
                } else {
                    observer.next('Email Not Found.');
                }                
                
            }, (error) =>{
                debugger;
                var y = error;
                observer.next('failed');
            });

        });
    }

    getList(id: string): Observable<any> {
        return new Observable((observer) => {
            const list = firebase.firestore().doc(`Lists/${id}`);
            
            list.onSnapshot(async (snap) => {
                let memList = snap.data().Members;
                this.listWithMembers = {
                    Creator: snap.data().Creator,
                    Desc: snap.data().Desc,
                    ID: snap.data().ID,
                    Members: []
                }

                for (let i in memList) {
                    const userInfo = firebase.firestore().doc(`users/${i}`);
                    await userInfo.get().then((info) => {
                        if (info) {
                            this.listWithMembers.Members.push(
                                {
                                    uid: info.data().uid,
                                    email: info.data().email,
                                    displayname: info.data().displayName,
                                    username: info.data().email                                    
                                });
                        }
                    });
                }
                observer.next(this.listWithMembers);
            })
        });
    }

    private updateList(listId: string, newUID: string) {
        const list = firebase.firestore().doc(`Lists/${listId}`);
       
        list.get().then((data) => {           
            let memList = data.data().Members;
            let newitem = { [newUID] : true };            
            let newList = Object.assign({}, memList, newitem);
            list.update({Members: newList});
        });

    }


}
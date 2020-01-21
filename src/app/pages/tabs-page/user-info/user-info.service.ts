import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { AuthService } from '../../../auth/auth.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {
    public userInfo: firebase.firestore.DocumentReference;
    public currentUser: firebase.User;

    constructor(private authService: AuthService, private toastCtrl: ToastController) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.currentUser = user;
                this.userInfo = firebase.firestore().doc(`/users/${user.uid}`);
            }
        });
    }

    getUserProfile(): firebase.firestore.DocumentReference {
        if (!this.userInfo) {
            this.currentUser = this.authService.currentUser;
            this.userInfo = firebase.firestore().doc(`/users/${this.currentUser.uid}`);;
        }
        return this.userInfo;
    }

    updateDisplayName(displayname: string): Promise<any> {
        return this.userInfo.update({ displayname })
        .then( async data => {
            const toast = await this.toastCtrl.create({
                message: 'User Info Updated',
                duration: 3000
              });
              await toast.present();
        })
        .catch( async error => {
            const toast = await this.toastCtrl.create({
                message: error,
                duration: 3000
              });
              await toast.present();
        });
    }

}
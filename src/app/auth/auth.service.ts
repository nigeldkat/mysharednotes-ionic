import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ToastController } from '@ionic/angular';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { UserData } from '../providers/user-data';
import { UserInfo } from '../interfaces/user-options';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private _userIsAuthenticated: boolean = false;
  private _userId = 'xyz';
  private _userInfo?: UserInfo;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor(private toastCtrl: ToastController, private router: Router, private userData: UserData) { }


  initAuthListener() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this._userIsAuthenticated = true;
        this.authChange.next(true);
        this.userData.login(user.uid);
        this.router.navigateByUrl('/app/tabs/schedule');
      } else {
        this._userIsAuthenticated = false;
        this.router.navigate(['/login']);
        this.authChange.next(false);
      }
    });
  }

  login(email: string, password: string) {
    //'squeakerdkat@hotmail.com', 'asdfasdf'
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.successfulLogin();
      })
      .catch(async error => {
        const toast = await this.toastCtrl.create({
          message: 'Login Failed.',
          duration: 3000
        });
        await toast.present();
      });
  }

  logout() {
    this._userIsAuthenticated = false;
    this.userData.logout();
    firebase.auth().signOut();
  }

  resetPW(email: string) {
    firebase.auth()
    .sendPasswordResetEmail(email).then(async result => {  
      const toast = await this.toastCtrl.create({
        message: 'Reset Password Email Sent (check junk mail if you do not see it).',
        duration: 3000
      });
      await toast.present(); 
      this.router.navigate(['/login']);
    })
    .catch(async error => {
      const toast = await this.toastCtrl.create({
        message: 'Reset Password Failed.',
        duration: 3000
      });
      await toast.present();
    }

    );
  }

  signUp(email: string, password: string, displayName: string = 'display name') {
    //   this.uiService.loadingStateChanged.next(true);
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUserCredential: firebase.auth.UserCredential) =>
        this.updateUserData(newUserCredential.user, displayName)
      )
      .then(result => {
        //this.uiService.loadingStateChanged.next(false);
        this.successfulLogin();
      }).catch(async error => {
        //this.uiService.loadingStateChanged.next(false);
        console.log(error);
        const toast = await this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        await toast.present();
      });
  }


  private successfulLogin() {
    const user = firebase.auth().currentUser;
    this.userData.login(user.uid);
    this._userIsAuthenticated = true;
    this._userId = user.uid;
    this.router.navigateByUrl('/app/tabs/schedule');
  }

  private updateUserData(user: any, displayName: string) {

    const userInfo = firebase
      .firestore()
      .doc(`users/${user.uid}`);

    const data: UserInfo = {
      uid: user.uid,
      email: user.email || null,
      username: user.email || null,
      displayname: displayName
    };
    return userInfo.set(data, { merge: true });
  }

}
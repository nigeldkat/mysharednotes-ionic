import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AlertController, ToastController } from '@ionic/angular';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { UserData } from '../providers/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  user: any = null;
  private _userIsAuthenticated: boolean = false;
  private _userId = 'xyz';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId(){
    return this._userId;
  }

  constructor(private toastCtrl: ToastController, private router: Router, private userData: UserData) { }


  initAuthListener() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this._userIsAuthenticated = true;
        this.authChange.next(true);
        this.user = user;
        this.userData.login(user.uid);
        this.router.navigateByUrl('/app/tabs/schedule');
      } else {
        this._userIsAuthenticated = false;
        this.router.navigate(['/login']);
        this.authChange.next(false);
        this.user = null;
      }
    });
  }

  login(email: string, password: string) {
//'squeakerdkat@hotmail.com', 'asdfasdf'
    firebase.auth()
    .signInWithEmailAndPassword( email, password)
    .then(result => {     
      console.log(result); 
      this.successfulLogin();
      // const user = firebase.auth().currentUser;
      // this.userData.login(user.uid);
      // this._userIsAuthenticated = true;
      // this.router.navigateByUrl('/app/tabs/schedule');
    })
    .catch(async error => {
      const toast = await this.toastCtrl.create({
        message: 'Login Failed.',
        duration: 3000
      });
      await toast.present();
    });
}

  signUp(email: string, password: string, displayName: string = 'display name') {
//   this.uiService.loadingStateChanged.next(true);
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    //.then(user => this.updateUserData(user, displayName))
    .then( result => {
      //this.uiService.loadingStateChanged.next(false);
      this.successfulLogin();
    }).catch(async error => {
      //this.uiService.loadingStateChanged.next(false);
      const toast = await this.toastCtrl.create({
        message: error,
        duration: 3000
      });
      await toast.present();
    });
  }


  logout() {
    this._userIsAuthenticated = false;
    firebase.auth().signOut();
  }

  private successfulLogin() {
    const user = firebase.auth().currentUser;
    this.userData.login(user.uid);
    this._userIsAuthenticated = true;
    this.router.navigateByUrl('/app/tabs/schedule');
  }

}
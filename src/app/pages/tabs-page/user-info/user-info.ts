import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { AuthService } from '../../../auth/auth.service';
import { UserInfoService } from './user-info.service';

import { UserInfo } from '../../../interfaces/user-options';

@Component({
  templateUrl: 'user-info.html',
  styleUrls: ['./user-info.scss'],
})
export class UserInfoPage implements OnInit {
  defaultHref = '';
  userInfo?: any;
  submitted = false;
  pageLoaded = false;

  constructor( private alertCtrl: AlertController,
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private router: Router
    ) {}

    ngOnInit() {
      this.userInfoService.getUserProfile()
      .get()
      .then( userInfoSnapshot => {
        this.userInfo = userInfoSnapshot.data();
        this.pageLoaded = true;
      });
    }

    update(form: NgForm) {

      this.submitted = true;
      if (form.valid) {
        this.userInfoService.updateDisplayName(this.userInfo.displayname);   
      }    
      
    }
  
}
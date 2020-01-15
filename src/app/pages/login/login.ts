import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { AuthService } from '../../auth/auth.service';

import { UserCredentials } from '../../interfaces/user-options';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserCredentials = { username: '', password: '' };
  submitted = false;
  @ViewChild('loginForm', { static: true }) loginForm: NgForm;

  constructor(
    private authService: AuthService,
    public userData: UserData,
    public router: Router
  ) { }

  ionViewWillEnter() {
    this.login = {username: '', password: ''};
    this.submitted = false;
    this.loginForm.reset();
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.authService.login(this.login.username, this.login.password);
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  onResetPassword() {
    this.router.navigateByUrl('/resetpassword');
  }
}

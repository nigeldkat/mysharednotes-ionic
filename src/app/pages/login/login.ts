import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { AuthService } from '../../auth/auth.service';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    private authService: AuthService,
    public userData: UserData,
    public router: Router
  ) { }



  onLogin(form: NgForm) {

    this.submitted = true;

    if (form.valid) {
      this.authService.login(this.login.username, this.login.password);
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}

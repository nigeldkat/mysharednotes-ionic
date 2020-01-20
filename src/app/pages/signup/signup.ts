import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserCredentials } from '../../interfaces/user-options';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: any = { username: '', password: '' , password2: '' };
  submitted = false;
  passwordsMatch = true;

  constructor(
    private authService: AuthService,
    public router: Router,
    public userData: UserData
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      if (this.signup.password === this.signup.password2){
        this.authService.signUp(this.signup.username, this.signup.password);
      } else {
        this.passwordsMatch = false;
      }            
    }
  }

  hideErrorMessage() {
    this.passwordsMatch = true;
  }
}

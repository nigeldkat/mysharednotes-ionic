import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
  styleUrls: ['./reset-password.scss'],
})
export class ResetPasswordPage {
  userEmail = '';
  submitted = false;

  constructor(
    private authService: AuthService
  ) { }

  onResetPassword(form: NgForm) {

    this.submitted = true;

    if (form.valid) {
      this.authService.resetPW(this.userEmail);
    }
  }

}

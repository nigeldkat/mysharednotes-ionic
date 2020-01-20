import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';

@Component({
  templateUrl: 'change-password.html',
  styleUrls: ['./change-password.scss'],
})
export class ChangePasswordPage {
  changePW = { password: '', newpassword: '', newpassword2: ''};
  defaultHref = '';
  submitted = false;
  passwordsMatch = true;

  constructor(private authService: AuthService) {}

  onChangePW(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      if (this.changePW.newpassword === this.changePW.newpassword2){
        this.authService.updatePassword(this.changePW.newpassword, this.changePW.password);
      } else {
        this.passwordsMatch = false;
      }      
    }    
  }

  
  hideErrorMessage() {
    this.passwordsMatch = true;
  }
  
}
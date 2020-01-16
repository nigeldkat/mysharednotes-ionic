import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
  styleUrls: ['./change-password.scss'],
})
export class ChangePasswordPage  {
  username: string;

  constructor(
    public router: Router
  ) { }


}
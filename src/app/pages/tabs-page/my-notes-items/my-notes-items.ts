import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'my-notes-items.html',
  styleUrls: ['./my-notes-items.scss'],
})
export class MyNotesItemsPage {
  
  defaultHref = '';
  newItem = '';

  //@ViewChild('addPersonForm', { static: true }) addPersonForm: NgForm;
  submitted = false;

  constructor(private route: ActivatedRoute ) {}

  ionViewWillEnter() {
    

  }


  
}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'my-notes-share.html',
  styleUrls: ['./my-notes-share.scss'],
})
export class MyNotesSharePage {
  
  defaultHref = '';
  submitted = false;

  constructor(private route: ActivatedRoute) {}

  ionViewWillEnter() {
    const noteId = this.route.snapshot.paramMap.get('noteId');
    alert(noteId);

  }

  
}
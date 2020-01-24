import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { MyNotesService } from './my-notes.service';
import { NoteList } from '../../../interfaces/notelist.model';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: 'my-notes.html',
  styleUrls: ['./my-notes.scss']
})
export class MyNotesPage implements OnInit {
  
  private noteSubscription: Subscription;
  public noteList: NoteList[] = [];

  constructor( private authService: AuthService, private myNoteService: MyNotesService) {}

  ngOnInit():void {
   
    this.myNoteService.getLists().subscribe( (data) => {
      this.noteList = data;
    });

  }

}
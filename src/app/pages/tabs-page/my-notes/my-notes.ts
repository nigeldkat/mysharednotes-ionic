import { Component, OnInit } from '@angular/core';
import { MyNotesService } from './my-notes.service';
import { NoteList } from '../../../interfaces/notelist.model';


@Component({
  templateUrl: 'my-notes.html',
  styleUrls: ['./my-notes.scss']
})
export class MyNotesPage implements OnInit {

  public newListName = '';
  public noteList: NoteList[] = [];
  public submitted = false;
  public showAdd = false;

  constructor(private myNoteService: MyNotesService) { }

  ngOnInit(): void {
    this.myNoteService.getLists().subscribe((data) => {
      this.noteList = data; 
    });
  }

  toggleShowAdd() {
    this.showAdd = !this.showAdd;
  }

}
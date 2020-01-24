import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { MyNotesService } from './my-notes.service';
import { NoteList } from '../../../interfaces/notelist.model';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'my-notes.html',
  styleUrls: ['./my-notes.scss']
})
export class MyNotesPage implements OnInit {

  public newListName = '';
  public noteList: NoteList[] = [];
  public submitted = false;
  @ViewChild('addListForm', { static: true }) templateForm: NgForm;

  constructor(private authService: AuthService, private myNoteService: MyNotesService) { }

  ngOnInit(): void {
    this.myNoteService.getLists().subscribe((data) => {
      this.noteList = data;
    });
  }

  onCreateList(f: NgForm) {
    this.submitted = true;
    if (f.valid) {
      this.myNoteService.addNewList(this.newListName);
      this.submitted = false;
      this.templateForm.resetForm();
    }
  }

  onDelete(id: string) {
    this.myNoteService.deleteList(id);
  }

}
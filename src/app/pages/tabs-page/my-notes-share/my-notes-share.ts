import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MyNotesShareService } from './my-notes-share.servics';
import { ListWithMembers } from './list-with-members.model';

@Component({
  templateUrl: 'my-notes-share.html',
  styleUrls: ['./my-notes-share.scss'],
})
export class MyNotesSharePage {
  
  addMemberStatus: string;
  defaultHref = '';
  shareToEmail = '';
  listWithMembers: ListWithMembers;
  @ViewChild('addPersonForm', { static: true }) addPersonForm: NgForm;
  submitted = false;

  constructor(private route: ActivatedRoute, private myNotesShareService: MyNotesShareService) {}

  ionViewWillEnter() {
    const noteId = this.route.snapshot.paramMap.get('noteId');

    this.myNotesShareService.getList(noteId).subscribe((data)=>{
      this.listWithMembers = data;
    });

  }

  onAddPerson(f: NgForm){
    this.submitted = true;
    if(f.valid){
      const noteId = this.route.snapshot.paramMap.get('noteId');
      this.myNotesShareService.addMember(this.shareToEmail, noteId).subscribe((data) => {
        this.addMemberStatus = data;
        if(!this.addMemberStatus.includes('Not Found')){
          this.addPersonForm.resetForm();
        }
      });
      this.submitted = false;
    }
  }

  
}
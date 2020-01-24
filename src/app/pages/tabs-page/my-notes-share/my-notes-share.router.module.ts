import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyNotesSharePage } from './my-notes-share';

const routes: Routes = [
  {
    path: '',
    component: MyNotesSharePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNotesSharePageRoutingModule { }
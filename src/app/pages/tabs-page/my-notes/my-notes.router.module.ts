import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyNotesPage } from './my-notes';

const routes: Routes = [
  {
    path: '',
    component: MyNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNotesPageRoutingModule { }
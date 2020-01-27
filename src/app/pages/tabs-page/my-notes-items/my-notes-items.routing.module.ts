import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyNotesItemsPage } from './my-notes-items';

const routes: Routes = [
  {
    path: '',
    component: MyNotesItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNotesItemsPageRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { UserPage } from './user-page/user-page';
import { MyNotesPage } from './my-notes/my-notes';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user-page',
        children: [
          {
            path: '',
            component: UserPage
          },
          {
            path:'change-password',
            loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
          },
          {
            path:'user-info',
            loadChildren: () => import('./user-info/user-info.module').then(m => m.UserInfoPageModule)
          }
        ]        
      },
      {
        path: 'my-notes',
        children: [
          {
            path: '',
            component: MyNotesPage 
          },
          {
            path:'my-notes-share/:noteId',
            loadChildren: () => import('./my-notes-share/my-notes-share.module').then(m => m.MyNotesSharePageModule)
          },
          {
            path:'my-notes-items/:noteId/:noteDesc',
            loadChildren: () => import('./my-notes-items/my-notes-items.module').then(m => m.MyNotesItemsPageModule)
          }
        ]
      },      
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/my-notes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }


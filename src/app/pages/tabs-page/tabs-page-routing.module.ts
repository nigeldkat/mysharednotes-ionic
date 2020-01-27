import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from './schedule/schedule';
import { UserPage } from './user-page/user-page';
import { MyNotesPage } from './my-notes/my-notes';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('./session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
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
            path:'my-notes-items/:noteId',
            loadChildren: () => import('./my-notes-items/my-notes-items.module').then(m => m.MyNotesItemsPageModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('./speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('./session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('./speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('./map/map.module').then(m => m.MapModule)
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
        redirectTo: '/app/tabs/schedule',
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


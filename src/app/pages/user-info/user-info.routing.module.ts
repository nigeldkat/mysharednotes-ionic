import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInfoPage } from './user-info';
import { UserProfilePage } from './user-profile/user-profile';


const routes: Routes = [
  {
    path: 'userinfo',
    component: UserInfoPage,
    children: [
      {
        path: 'userprofile',
        children: [
          {
            path: '',
            component: UserProfilePage
          },
          {
            path: 'userdata',
            loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule)
          }
          
        ]
      }
    ]
  }, 
  {
      path: '',
      redirectTo: '/userinfo/userprofile',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoPageRoutingModule { }


// const routes: Routes = [
//   {
//     path: 'user-info',
//     component: UserInfoPage,
//     children: [
//       {
//         path: 'user-profile',
//         children: [
//           {
//             path: '',
//             component: UserProfilePage,
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/user-info/user-profile',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];
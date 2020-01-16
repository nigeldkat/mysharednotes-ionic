import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// import { TabsPage } from './tabs-page';
// import { TabsPageRoutingModule } from './tabs-page-routing.module';

// import { AboutModule } from './about/about.module';
// import { MapModule } from './map/map.module';
// import { ScheduleModule } from './schedule/schedule.module';
// import { SessionDetailModule } from './session-detail/session-detail.module';
// import { SpeakerDetailModule } from './speaker-detail/speaker-detail.module';
// import { SpeakerListModule } from './speaker-list/speaker-list.module';

import { UserInfoPage } from './user-info';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserInfoPageRoutingModule} from './user-info.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserProfileModule,
    UserInfoPageRoutingModule
  ],
  declarations: [
    UserInfoPage,
  ]
})
export class UserInfoModule { }
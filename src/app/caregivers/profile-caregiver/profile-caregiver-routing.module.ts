import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCaregiverPage } from './profile-caregiver.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCaregiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCaregiverPageRoutingModule {}

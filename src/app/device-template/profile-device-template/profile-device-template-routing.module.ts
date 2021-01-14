import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDeviceTemplatePage } from './profile-device-template.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDeviceTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDeviceTemplatePageRoutingModule {}

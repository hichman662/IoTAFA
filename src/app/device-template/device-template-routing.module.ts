import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceTemplatePage } from './device-template.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceTemplatePage
  },
  {
    path: 'add-device-template',
    loadChildren: () => import('./add-device-template/add-device-template.module').then( m => m.AddDeviceTemplatePageModule)
  },
  {
    path: 'profile-device-template',
    loadChildren: () => import('./profile-device-template/profile-device-template.module').then( m => m.ProfileDeviceTemplatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplatePageRoutingModule {}

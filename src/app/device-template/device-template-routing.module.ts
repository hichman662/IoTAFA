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
    path: 'profile-device-template/:Id',
    loadChildren: () => import('./profile-device-template/profile-device-template.module').then( m => m.ProfileDeviceTemplatePageModule)
  },
  {
    path: 'profile-command',
    loadChildren: () => import('./profile-command/profile-command.module').then( m => m.ProfileCommandPageModule)
  },
  {
    path: 'edit-device-template/:Id',
    loadChildren: () => import('./edit-device-template/edit-device-template.module').then( m => m.EditDeviceTemplatePageModule)
  },
  {
    path: 'edit-telemetry',
    loadChildren: () => import('./edit-telemetry/edit-telemetry.module').then( m => m.EditTelemetryPageModule)
  },
  {
    path: 'edit-property',
    loadChildren: () => import('./edit-property/edit-property.module').then( m => m.EditPropertyPageModule)
  },
  {
    path: 'edit-command',
    loadChildren: () => import('./edit-command/edit-command.module').then( m => m.EditCommandPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplatePageRoutingModule {}


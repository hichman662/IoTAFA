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
  },  {
    path: 'edit-telemetry',
    loadChildren: () => import('./edit-telemetry/edit-telemetry.module').then( m => m.EditTelemetryPageModule)
  },


  /*{
    path: 'profile-property',
    loadChildren: () => import('./profile-property/profile-property.module').then( m => m.ProfilePropertyPageModule)
  },

  {
    path: 'profile-telemetry',
    loadChildren: () => import('./profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)
  },
 {
    path: 'list-properties',
    loadChildren: () => import('./list-properties/list-properties.module').then( m => m.ListPropertiesPageModule)
  },
  {
    path: 'list-commands',
    loadChildren: () => import('./list-commands/list-commands.module').then( m => m.ListCommandsPageModule)
  },
  {
    path: 'profile-telemetry',
    loadChildren: () => import('./profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)
  },
  {
    path: 'profile-command',
    loadChildren: () => import('./profile-command/profile-command.module').then( m => m.ProfileCommandPageModule)
  },
  {
    path: 'add-property',
    loadChildren: () => import('./add-property/add-property.module').then( m => m.AddPropertyPageModule)
  },
  {
    path: 'add-command',
    loadChildren: () => import('./add-command/add-command.module').then( m => m.AddCommandPageModule)
  },
  {
    path: 'add-telemetry',
    loadChildren: () => import('./add-telemetry/add-telemetry.module').then( m => m.AddTelemetryPageModule)
    },
  {
    path: 'specific-telemetry',
    loadChildren: () => import('./specific-telemetry/specific-telemetry.module').then( m => m.SpecificTelemetryPageModule)
  }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplatePageRoutingModule {}


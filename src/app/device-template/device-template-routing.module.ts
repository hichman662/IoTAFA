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
    path: 'list-telemetries/:Id',
    loadChildren: () => import('./list-telemetries/list-telemetries.module').then( m => m.ListTelemetriesPageModule)
  },
  {
    path: 'list-commands/:Id',
    loadChildren: () => import('./list-commands/list-commands.module').then( m => m.ListCommandsPageModule)
  },
  {
    path: 'list-properties/:Id',
    loadChildren: () => import('./list-properties/list-properties.module').then( m => m.ListPropertiesPageModule)
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
    },  {
    path: 'profile-telemetry',
    loadChildren: () => import('./profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplatePageRoutingModule {}


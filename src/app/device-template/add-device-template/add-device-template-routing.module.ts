import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDeviceTemplatePage } from './add-device-template.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeviceTemplatePage
  },
  {
    path: 'device-template-command',
    loadChildren: () => import('../device-template-command/device-template-command.module').then( m => m.DeviceTemplateCommandPageModule)
  },
  {
    path: 'device-template-property',
    loadChildren: () => import('../device-template-property/device-template-property.module').then( m => m.DeviceTemplatePropertyPageModule)
  },
  // tslint:disable-next-line: max-line-length
  { path: 'device-template-telemetry',
  // tslint:disable-next-line: max-line-length
  loadChildren: () => import('../device-template-telemetry/device-template-telemetry.module').then( m => m.DeviceTemplateTelemetryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeviceTemplatePageRoutingModule {}

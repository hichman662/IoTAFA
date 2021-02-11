import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceTemplatePage } from './add-device-template.page';
import { AddCommandPage } from './../add-command/add-command.page';
import { AddTelemetryPage } from './../add-telemetry/add-telemetry.page';
import { AddPropertyPage } from './../add-property/add-property.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeviceTemplatePage
  },
  {
    path: 'add-device-template',
    component: AddDeviceTemplatePage
  },
  {
    path: 'add-property',
    loadChildren: () => import('../add-property/add-property.module').then( m => m.AddPropertyPageModule)
  },
  {
    path: 'add-telemetry',
    loadChildren: () => import('../add-telemetry/add-telemetry.module').then( m => m.AddTelemetryPageModule)
  },
  {
    path: 'add-command',
    loadChildren: () => import('../add-command/add-command.module').then( m => m.AddCommandPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeviceTemplatePageRoutingModule {}

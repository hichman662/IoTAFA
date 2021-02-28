import { ComponentTelemetryComponent } from '../component-telemetry/component-telemetry.component';

import { ListCommandsPage } from './../list-commands/list-commands.page';
import { ListPropertiesPage } from './../list-properties/list-properties.page';
import { ListTelemetriesPage } from './../list-telemetries/list-telemetries.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDeviceTemplatePage } from './profile-device-template.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDeviceTemplatePage,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDeviceTemplatePageRoutingModule {}

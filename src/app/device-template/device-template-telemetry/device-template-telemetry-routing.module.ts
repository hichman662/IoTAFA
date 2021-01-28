import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceTemplateTelemetryPage } from './device-template-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceTemplateTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplateTelemetryPageRoutingModule {}

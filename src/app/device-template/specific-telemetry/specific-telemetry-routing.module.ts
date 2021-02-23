import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificTelemetryPage } from './specific-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificTelemetryPageRoutingModule {}

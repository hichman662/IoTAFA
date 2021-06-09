import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryDataPage } from './telemetry-data.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryDataPageRoutingModule {}

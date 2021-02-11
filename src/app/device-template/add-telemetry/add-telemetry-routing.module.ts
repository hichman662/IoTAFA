import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTelemetryPage } from './add-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: AddTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTelemetryPageRoutingModule {}

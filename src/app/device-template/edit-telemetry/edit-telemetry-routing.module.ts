import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTelemetryPage } from './edit-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: EditTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTelemetryPageRoutingModule {}

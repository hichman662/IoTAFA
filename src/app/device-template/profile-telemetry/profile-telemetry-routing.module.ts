import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTelemetryPage } from './profile-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTelemetryPageRoutingModule {}

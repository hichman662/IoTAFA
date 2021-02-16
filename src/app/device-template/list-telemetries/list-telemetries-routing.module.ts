import { ProfileTelemetryPage } from '../profile-telemetry/profile-telemetry.page';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTelemetriesPage } from './list-telemetries.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  },
   {
    path: 'telemetry/:Id',
    component: ProfileTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTelemetriesPageRoutingModule {}

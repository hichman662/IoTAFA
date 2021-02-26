import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTelemetriesPage } from './list-telemetries.page';
import { ProfileTelemetryPage } from '../profile-telemetry/profile-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  },
  {
    path : 'profileTelemetry/:Id',
    component: ProfileTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTelemetriesPageRoutingModule {}

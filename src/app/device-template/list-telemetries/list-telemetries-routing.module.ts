
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTelemetryPage } from '../profile-telemetry/profile-telemetry.page';

import { ListTelemetriesPage } from './list-telemetries.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  },
  /* {
    path: 'profile-telemetry/:Id',
    loadChildren: () => import('../profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)
  } */
  {
    path : 'profile-telemetry',
    component: ProfileTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTelemetriesPageRoutingModule {}

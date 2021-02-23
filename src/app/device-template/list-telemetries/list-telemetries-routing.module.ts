import { ProfileTelemetryPageModule } from './../profile-telemetry/profile-telemetry.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTelemetryPage } from '../profile-telemetry/profile-telemetry.page';

import { ListTelemetriesPage } from './list-telemetries.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  },
  {
    path : 'profileTelemetry/:Id',
    component: ProfileTelemetryPage
  }
  /* {
    path: 'profileTelemetry/:Id',
    loadChildren: () => import('../profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ProfileTelemetryPageModule],
  exports: [RouterModule]
})
export class ListTelemetriesPageRoutingModule {}

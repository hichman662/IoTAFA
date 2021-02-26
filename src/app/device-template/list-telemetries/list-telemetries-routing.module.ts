import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTelemetriesPage } from './list-telemetries.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  },
  {
    path : 'profileTelemetry/:Id',
    loadChildren: () => import('../profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTelemetriesPageRoutingModule {}

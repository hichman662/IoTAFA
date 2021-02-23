import { SpecificTelemetryPageModule } from './../specific-telemetry/specific-telemetry.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTelemetryPage } from './add-telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: AddTelemetryPage
  },
  {
    path: 'SpecificTelemetry',
    loadChildren: () => import('../specific-telemetry/specific-telemetry.module').then( m => SpecificTelemetryPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTelemetryPageRoutingModule {}

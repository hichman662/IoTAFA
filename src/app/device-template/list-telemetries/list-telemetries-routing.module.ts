import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTelemetriesPage } from './list-telemetries.page';

const routes: Routes = [
  {
    path: '',
    component: ListTelemetriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTelemetriesPageRoutingModule {}

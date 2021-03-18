import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPatientProfilePage } from './detail-patient-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPatientProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPatientProfilePageRoutingModule {}

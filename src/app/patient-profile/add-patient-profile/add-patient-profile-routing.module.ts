import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientProfilePage } from './add-patient-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatientProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatientProfilePageRoutingModule {}

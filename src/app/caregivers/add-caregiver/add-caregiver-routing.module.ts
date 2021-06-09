import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCaregiverPage } from './add-caregiver.page';

const routes: Routes = [
  {
    path: '',
    component: AddCaregiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCaregiverPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisabilityProfilePage } from './disability-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DisabilityProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisabilityProfilePageRoutingModule {}

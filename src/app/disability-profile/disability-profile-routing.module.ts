import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisabilityProfilePage } from './disability-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DisabilityProfilePage
  },
  {
    path: 'add-disability-profile',
    loadChildren: () => import('./add-disability-profile/add-disability-profile.module').then( m => m.AddDisabilityProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisabilityProfilePageRoutingModule {}

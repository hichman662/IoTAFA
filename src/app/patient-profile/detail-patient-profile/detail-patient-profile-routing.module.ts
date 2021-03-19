import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPatientProfilePage } from './detail-patient-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPatientProfilePage
  },
  {
    path: 'condition/:Id',
    loadChildren: () => import('../detail-condition/detail-condition.module').then( m => m.DetailConditionPageModule)
  },
  {
    path: 'disability/:Id',
    loadChildren: () => import('../detail-disability/detail-disability.module').then( m => m.DetailDisabilityPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPatientProfilePageRoutingModule {}

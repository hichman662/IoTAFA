import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientProfilePage } from './patient-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientProfilePage
  },
  {
    path: 'detail-patient-profile/:Id',
    loadChildren: () => import('./detail-patient-profile/detail-patient-profile.module').then( m => m.DetailPatientProfilePageModule)
  },
  {
    path: 'add-patient-profile',
    loadChildren: () => import('./add-patient-profile/add-patient-profile.module').then( m => m.AddPatientProfilePageModule)
  },
  {
    path: 'detail-disability',
    loadChildren: () => import('./detail-disability/detail-disability.module').then( m => m.DetailDisabilityPageModule)
  },
  {
    path: 'detail-condition',
    loadChildren: () => import('./detail-condition/detail-condition.module').then( m => m.DetailConditionPageModule)
  },
  {
    path: 'detail-access-mode',
    loadChildren: () => import('./detail-access-mode/detail-access-mode.module').then( m => m.DetailAccessModePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientProfilePageRoutingModule {}

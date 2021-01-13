import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaregiversPage } from './caregivers.page';

const routes: Routes = [
  {
    path: '',
    component: CaregiversPage
  },
  {
    path: 'add-caregiver',
    loadChildren: () => import('./add-caregiver/add-caregiver.module').then( m => m.AddCaregiverPageModule)
  },
  {
    path: 'profile-caregiver',
    loadChildren: () => import('./profile-caregiver/profile-caregiver.module').then( m => m.ProfileCaregiverPageModule)
  },  {
    path: 'profile-caregiver',
    loadChildren: () => import('./profile-caregiver/profile-caregiver.module').then( m => m.ProfileCaregiverPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaregiversPageRoutingModule {}

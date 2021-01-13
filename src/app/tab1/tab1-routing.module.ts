import { DisabilityProfilePageModule } from './../disability-profile/disability-profile.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { DeviceTemplatePageModule } from '../device-template/device-template.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'caregivers',
    loadChildren: () => import('../caregivers/caregivers.module').then( m => m.CaregiversPageModule)
  },
  {
    path: 'disability-profile',
    loadChildren: () => import('../disability-profile/disability-profile.module').then( m => m.DisabilityProfilePageModule)
  },
  {
    path: 'device-template',
    loadChildren: () => import('../device-template/device-template.module').then( m => m.DeviceTemplatePageModule)
  },
  {
    path: 'telemetry-data',
    loadChildren: () => import('../telemetry-data/telemetry-data.module').then( m => m.TelemetryDataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

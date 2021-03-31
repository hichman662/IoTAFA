import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: Tab1Page,
  }
=======
    loadChildren: () => import('../device-template/device-template.module').then( m => m.DeviceTemplatePageModule)
  }
  /* {
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
  } */
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

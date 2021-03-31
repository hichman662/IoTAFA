import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: Tab2Page,
=======
    loadChildren: () => import('../patient-profile/patient-profile.module').then( m => m.PatientProfilePageModule)
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

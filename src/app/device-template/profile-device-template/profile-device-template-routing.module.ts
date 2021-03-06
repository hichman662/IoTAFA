import { ComponentTelemetryComponent } from '../component-telemetry/component-telemetry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDeviceTemplatePage } from './profile-device-template.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDeviceTemplatePage,
   },
   {
    path : 'profileTelemetry/:Id',
    loadChildren: () => import('../profile-telemetry/profile-telemetry.module').then( m => m.ProfileTelemetryPageModule)

  },
  {
    path: 'profileProperty/:Id',
    loadChildren: () => import('../profile-property/profile-property.module').then( m => m.ProfilePropertyPageModule)

  },
  {
    path: 'profileCommand/:Id',
    loadChildren: () => import('../profile-command/profile-command.module').then( m => m.ProfileCommandPageModule)

  },
  {
    path: 'editTelemetry/:IdTel',
    loadChildren: () => import('../edit-telemetry/edit-telemetry.module').then( m => m.EditTelemetryPageModule)

  },
  {
    path: 'editCommand/:IdCom',
    loadChildren: () => import('../edit-command/edit-command.module').then( m => m.EditCommandPageModule)

  },
  {
    path: 'editProperty/:IdPro',
    loadChildren: () => import('../edit-property/edit-property.module').then( m => m.EditPropertyPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDeviceTemplatePageRoutingModule {}

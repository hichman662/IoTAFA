import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTelemetryPage } from './profile-telemetry.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: ProfileTelemetryPage
  } ,
  {
    path: 'profileTelemetry/:Id',
    component: ProfileTelemetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule,
  FormsModule,
  IonicModule],
  exports: [RouterModule],
})
export class ProfileTelemetryPageRoutingModule {}

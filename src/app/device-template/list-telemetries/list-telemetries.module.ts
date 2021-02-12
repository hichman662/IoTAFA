import { ProfileTelemetryPageModule } from './../profile-telemetry/profile-telemetry.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTelemetriesPageRoutingModule } from './list-telemetries-routing.module';

import { ListTelemetriesPage } from './list-telemetries.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTelemetriesPageRoutingModule,
    ProfileTelemetryPageModule
  ],
  declarations: [ListTelemetriesPage]
})
export class ListTelemetriesPageModule {}

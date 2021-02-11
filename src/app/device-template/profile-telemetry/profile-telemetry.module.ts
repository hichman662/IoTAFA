import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTelemetryPageRoutingModule } from './profile-telemetry-routing.module';

import { ProfileTelemetryPage } from './profile-telemetry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTelemetryPageRoutingModule
  ],
  declarations: [ProfileTelemetryPage]
})
export class ProfileTelemetryPageModule {}

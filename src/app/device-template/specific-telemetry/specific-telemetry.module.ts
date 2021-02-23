import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificTelemetryPageRoutingModule } from './specific-telemetry-routing.module';

import { SpecificTelemetryPage } from './specific-telemetry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificTelemetryPageRoutingModule
  ],
  declarations: [SpecificTelemetryPage]
})
export class SpecificTelemetryPageModule {}

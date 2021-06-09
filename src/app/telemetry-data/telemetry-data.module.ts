import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryDataPageRoutingModule } from './telemetry-data-routing.module';

import { TelemetryDataPage } from './telemetry-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryDataPageRoutingModule
  ],
  declarations: [TelemetryDataPage]
})
export class TelemetryDataPageModule {}

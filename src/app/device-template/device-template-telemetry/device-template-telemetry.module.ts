import { DeviceTemplateTelemetryComponent } from '../device-template-all-components/device-template-telemetry/device-template-telemetry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceTemplateTelemetryPageRoutingModule } from './device-template-telemetry-routing.module';

import { DeviceTemplateTelemetryPage } from './device-template-telemetry.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplateTelemetryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeviceTemplateTelemetryPage, DeviceTemplateTelemetryComponent]
})
export class DeviceTemplateTelemetryPageModule {}

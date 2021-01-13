import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeviceTemplatePageRoutingModule } from './add-device-template-routing.module';

import { AddDeviceTemplatePage } from './add-device-template.page';
import { DeviceTemplateTelemetryComponent } from './device-template-telemetry/device-template-telemetry.component';
import { DeviceTemplateCommandComponent } from './device-template-command/device-template-command.component';
import { DeviceTemplatePropertyComponent } from './device-template-property/device-template-property.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeviceTemplatePageRoutingModule
  ],
  declarations: [AddDeviceTemplatePage, DeviceTemplateTelemetryComponent, DeviceTemplateCommandComponent, DeviceTemplatePropertyComponent]
})
export class AddDeviceTemplatePageModule {}

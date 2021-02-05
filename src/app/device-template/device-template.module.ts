

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { DeviceTemplatePageRoutingModule } from './device-template-routing.module';

import { DeviceTemplatePage } from './device-template.page';
import { DeviceTemplateTelemetryPageModule } from './device-template-telemetry/device-template-telemetry.module';
import { DeviceTemplatePropertyPageModule } from './device-template-property/device-template-property.module';
import { DeviceTemplateCommandPageModule } from './device-template-command/device-template-command.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplatePageRoutingModule,
    ReactiveFormsModule,
    DeviceTemplateTelemetryPageModule,
    DeviceTemplateCommandPageModule,
    DeviceTemplatePropertyPageModule,
    MatExpansionModule,
  ],
  declarations: [DeviceTemplatePage]
})
export class DeviceTemplatePageModule {}


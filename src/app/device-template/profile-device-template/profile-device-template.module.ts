import { ComponentCommandComponent } from './../component-command/component-command.component';
import { ComponentPropertyComponent } from './../component-property/component-property.component';
import { ComponentTelemetryComponent } from '../component-telemetry/component-telemetry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDeviceTemplatePageRoutingModule } from './profile-device-template-routing.module';

import { ProfileDeviceTemplatePage } from './profile-device-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileDeviceTemplatePageRoutingModule
  ],
  declarations: [ProfileDeviceTemplatePage,
    ComponentTelemetryComponent,
     ComponentPropertyComponent,
     ComponentCommandComponent]
})
export class ProfileDeviceTemplatePageModule {}

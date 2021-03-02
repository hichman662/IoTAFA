import { AddTelemetryComponentComponent } from './../add-telemetry-component/add-telemetry-component.component';
import { AddCommandComponentComponent } from './../add-command-component/add-command-component.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeviceTemplatePageRoutingModule } from './add-device-template-routing.module';

import { AddDeviceTemplatePage } from './add-device-template.page';


import {MatExpansionModule} from '@angular/material/expansion';
import { AddPropertyComponentComponent } from '../add-property-component/add-property-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeviceTemplatePageRoutingModule, ReactiveFormsModule, MatExpansionModule, RouterModule
  ],
  declarations: [AddDeviceTemplatePage, AddCommandComponentComponent,AddTelemetryComponentComponent,AddPropertyComponentComponent]
})
export class AddDeviceTemplatePageModule {}

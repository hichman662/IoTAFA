
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { DeviceTemplateCommandPageRoutingModule } from './device-template-command-routing.module';

import { DeviceTemplateCommandPage } from './device-template-command.page';
// tslint:disable-next-line: max-line-length
import { DeviceTemplateCommandComponent } from '../device-template-all-components/device-template-command/device-template-command.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplateCommandPageRoutingModule, ReactiveFormsModule
  ],
  declarations: [DeviceTemplateCommandPage, DeviceTemplateCommandComponent]
})
export class DeviceTemplateCommandPageModule {}

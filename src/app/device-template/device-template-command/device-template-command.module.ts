
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceTemplateCommandPageRoutingModule } from './device-template-command-routing.module';

import { DeviceTemplateCommandPage } from './device-template-command.page';
// tslint:disable-next-line: max-line-length
import { DeviceTemplateCommandComponent } from '../device-template-all-components/device-template-command/device-template-command.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplateCommandPageRoutingModule
  ],
  declarations: [DeviceTemplateCommandPage, DeviceTemplateCommandComponent]
})
export class DeviceTemplateCommandPageModule {}

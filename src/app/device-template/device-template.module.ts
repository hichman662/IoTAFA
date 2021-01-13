import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceTemplatePageRoutingModule } from './device-template-routing.module';

import { DeviceTemplatePage } from './device-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplatePageRoutingModule
  ],
  declarations: [DeviceTemplatePage]
})
export class DeviceTemplatePageModule {}

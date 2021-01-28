import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceTemplatePropertyPageRoutingModule } from './device-template-property-routing.module';

import { DeviceTemplatePropertyPage } from './device-template-property.page';
import { DeviceTemplatePropertyComponent } from '../device-template-all-components/device-template-property/device-template-property.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplatePropertyPageRoutingModule
  ],
  declarations: [DeviceTemplatePropertyPage, DeviceTemplatePropertyComponent]
})
export class DeviceTemplatePropertyPageModule {}

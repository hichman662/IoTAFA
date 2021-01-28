import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeviceTemplatePageRoutingModule } from './add-device-template-routing.module';

import { AddDeviceTemplatePage } from './add-device-template.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeviceTemplatePageRoutingModule
  ],
  declarations: [AddDeviceTemplatePage]
})
export class AddDeviceTemplatePageModule {}

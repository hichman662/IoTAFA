import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeviceTemplatePageRoutingModule } from './add-device-template-routing.module';

import { AddDeviceTemplatePage } from './add-device-template.page';


import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeviceTemplatePageRoutingModule, ReactiveFormsModule, MatExpansionModule, 
  ],
  declarations: [AddDeviceTemplatePage]
})
export class AddDeviceTemplatePageModule {}

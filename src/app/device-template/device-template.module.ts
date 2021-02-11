

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { DeviceTemplatePageRoutingModule } from './device-template-routing.module';

import { DeviceTemplatePage } from './device-template.page';

import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTemplatePageRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule
  ],
  declarations: [DeviceTemplatePage]
})
export class DeviceTemplatePageModule {}


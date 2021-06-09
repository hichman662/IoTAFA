import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditDeviceTemplatePageRoutingModule } from './edit-device-template-routing.module';

import { EditDeviceTemplatePage } from './edit-device-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDeviceTemplatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditDeviceTemplatePage]
})
export class EditDeviceTemplatePageModule {}

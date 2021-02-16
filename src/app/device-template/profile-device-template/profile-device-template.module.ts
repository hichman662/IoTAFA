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
  declarations: [ProfileDeviceTemplatePage]
})
export class ProfileDeviceTemplatePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCaregiverPageRoutingModule } from './profile-caregiver-routing.module';

import { ProfileCaregiverPage } from './profile-caregiver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCaregiverPageRoutingModule
  ],
  declarations: [ProfileCaregiverPage]
})
export class ProfileCaregiverPageModule {}

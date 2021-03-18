import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientProfilePageRoutingModule } from './add-patient-profile-routing.module';

import { AddPatientProfilePage } from './add-patient-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientProfilePageRoutingModule
  ],
  declarations: [AddPatientProfilePage]
})
export class AddPatientProfilePageModule {}

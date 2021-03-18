import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPatientProfilePageRoutingModule } from './detail-patient-profile-routing.module';

import { DetailPatientProfilePage } from './detail-patient-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPatientProfilePageRoutingModule
  ],
  declarations: [DetailPatientProfilePage]
})
export class DetailPatientProfilePageModule {}

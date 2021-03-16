import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientProfilePageRoutingModule } from './patient-profile-routing.module';

import { PatientProfilePage } from './patient-profile.page';
import { RouterModule } from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientProfilePageRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [PatientProfilePage]
})
export class PatientProfilePageModule {}

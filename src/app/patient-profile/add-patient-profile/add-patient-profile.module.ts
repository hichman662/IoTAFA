import { AddDisabilityComponent } from './../add-disability/add-disability.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatientProfilePageRoutingModule } from './add-patient-profile-routing.module';

import { AddPatientProfilePage } from './add-patient-profile.page';
import { AddConditionComponent } from '../add-condition/add-condition.component';
import { AddAccessModeComponent } from '../add-access-mode/add-access-mode.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatientProfilePageRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
     RouterModule
  ],
  declarations: [AddPatientProfilePage, AddDisabilityComponent, AddConditionComponent, AddAccessModeComponent]
})
export class AddPatientProfilePageModule {}

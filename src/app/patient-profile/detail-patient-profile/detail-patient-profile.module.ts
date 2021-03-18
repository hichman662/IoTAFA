import { ComponentConditionComponent } from './../component-condition/component-condition.component';
import { ComponentAccessModeComponent } from './../component-access-mode/component-access-mode.component';
import { ComponentDisabilityComponent } from './../component-disability/component-disability.component';
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
  declarations: [DetailPatientProfilePage, ComponentDisabilityComponent, ComponentAccessModeComponent, ComponentConditionComponent]
})
export class DetailPatientProfilePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCaregiverPageRoutingModule } from './add-caregiver-routing.module';

import { AddCaregiverPage } from './add-caregiver.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCaregiverPageRoutingModule
  ],
  declarations: [AddCaregiverPage]
})
export class AddCaregiverPageModule {}

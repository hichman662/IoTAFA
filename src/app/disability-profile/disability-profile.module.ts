import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisabilityProfilePageRoutingModule } from './disability-profile-routing.module';

import { DisabilityProfilePage } from './disability-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisabilityProfilePageRoutingModule
  ],
  declarations: [DisabilityProfilePage]
})
export class DisabilityProfilePageModule {}

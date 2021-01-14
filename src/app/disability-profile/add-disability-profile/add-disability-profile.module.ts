import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDisabilityProfilePageRoutingModule } from './add-disability-profile-routing.module';

import { AddDisabilityProfilePage } from './add-disability-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDisabilityProfilePageRoutingModule
  ],
  declarations: [AddDisabilityProfilePage]
})
export class AddDisabilityProfilePageModule {}

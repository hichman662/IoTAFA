import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePropertyPageRoutingModule } from './profile-property-routing.module';

import { ProfilePropertyPage } from './profile-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePropertyPageRoutingModule
  ],
  declarations: [ProfilePropertyPage]
})
export class ProfilePropertyPageModule {}

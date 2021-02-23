import { ProfilePropertyPage } from './../profile-property/profile-property.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPropertiesPageRoutingModule } from './list-properties-routing.module';

import { ListPropertiesPage } from './list-properties.page';
import { ProfilePropertyPageModule } from '../profile-property/profile-property.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPropertiesPageRoutingModule,
    ProfilePropertyPageModule
  ],
  declarations: [ListPropertiesPage]
})
export class ListPropertiesPageModule {}

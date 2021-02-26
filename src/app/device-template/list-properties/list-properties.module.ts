import { HttpClientModule } from '@angular/common/http';
import { ProfilePropertyPageModule } from './../profile-property/profile-property.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPropertiesPageRoutingModule } from './list-properties-routing.module';

import { ListPropertiesPage } from './list-properties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPropertiesPageRoutingModule,
    ProfilePropertyPageModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  declarations: [ListPropertiesPage]
})
export class ListPropertiesPageModule {}

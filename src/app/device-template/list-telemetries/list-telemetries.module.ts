import { ProfileTelemetryPageModule } from './../profile-telemetry/profile-telemetry.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTelemetriesPageRoutingModule } from './list-telemetries-routing.module';

import { ListTelemetriesPage } from './list-telemetries.page';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ListTelemetriesPageRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProfileTelemetryPageModule
  ],
  declarations: [ListTelemetriesPage]
})
export class ListTelemetriesPageModule {}




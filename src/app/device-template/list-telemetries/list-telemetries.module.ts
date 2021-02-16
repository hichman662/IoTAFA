import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTelemetriesPageRoutingModule } from './list-telemetries-routing.module';

import { ListTelemetriesPage } from './list-telemetries.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTelemetriesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListTelemetriesPage]
})
export class ListTelemetriesPageModule {}

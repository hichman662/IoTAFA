import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTelemetryPageRoutingModule } from './add-telemetry-routing.module';

import { AddTelemetryPage } from './add-telemetry.page';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTelemetryPageRoutingModule,  ReactiveFormsModule, MatExpansionModule
  ],
  declarations: [AddTelemetryPage]
})
export class AddTelemetryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { EditTelemetryPageRoutingModule } from './edit-telemetry-routing.module';

import { EditTelemetryPage } from './edit-telemetry.page';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTelemetryPageRoutingModule,
    ReactiveFormsModule, MatExpansionModule
  ],
  declarations: [EditTelemetryPage]
})
export class EditTelemetryPageModule {}

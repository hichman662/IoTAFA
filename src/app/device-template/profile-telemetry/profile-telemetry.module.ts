import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileTelemetryPageRoutingModule } from './profile-telemetry-routing.module';
import { ProfileTelemetryPage } from './profile-telemetry.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTelemetryPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ProfileTelemetryPage]
})
export class ProfileTelemetryPageModule {}

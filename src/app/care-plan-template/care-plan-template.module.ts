import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarePlanTemplatePageRoutingModule } from './care-plan-template-routing.module';

import { CarePlanTemplatePage } from './care-plan-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    RouterModule,
    CarePlanTemplatePageRoutingModule
  ],
  declarations: [CarePlanTemplatePage]
})
export class CarePlanTemplatePageModule {}

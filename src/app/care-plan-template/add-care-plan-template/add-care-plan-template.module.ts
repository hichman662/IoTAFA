import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarePlanTemplatePageRoutingModule } from './add-care-plan-template-routing.module';

import { AddCarePlanTemplatePage } from './add-care-plan-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarePlanTemplatePageRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
     RouterModule
  ],
  declarations: [AddCarePlanTemplatePage]
})
export class AddCarePlanTemplatePageModule {}

import { AddComunicationComponent } from './../add-comunication/add-comunication.component';
import { AddGoalComponent } from './../add-goal/add-goal.component';
import { AddCareActivityComponent } from './../add-care-activity/add-care-activity.component';
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
  declarations: [AddCarePlanTemplatePage, AddCareActivityComponent, AddGoalComponent, AddComunicationComponent]
})
export class AddCarePlanTemplatePageModule {}

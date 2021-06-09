import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentGoalComponent } from './../component-goal/component-goal.component';

import { ComponentCareActivityComponent } from './../component-care-activity/component-care-activity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCarePlanTemplatePageRoutingModule } from './detail-care-plan-template-routing.module';

import { DetailCarePlanTemplatePage } from './detail-care-plan-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCarePlanTemplatePageRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    RouterModule
  ],
  declarations: [DetailCarePlanTemplatePage,
     ComponentCareActivityComponent,
     ComponentGoalComponent]
})
export class DetailCarePlanTemplatePageModule {}

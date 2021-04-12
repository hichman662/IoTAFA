import { ComponentGoalComponent } from './../component-goal/component-goal.component';
import { ComponentComunicationComponent } from './../component-comunication/component-comunication.component';
import { ComponentCareActivityComponent } from './../component-care-activity/component-care-activity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCarePlanTemplatePageRoutingModule } from './detail-care-plan-template-routing.module';

import { DetailCarePlanTemplatePage } from './detail-care-plan-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCarePlanTemplatePageRoutingModule
  ],
  declarations: [DetailCarePlanTemplatePage,
     ComponentCareActivityComponent,
     ComponentComunicationComponent,
     ComponentGoalComponent]
})
export class DetailCarePlanTemplatePageModule {}
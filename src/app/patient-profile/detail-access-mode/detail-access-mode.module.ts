import { ComponentAdaptionDetailRequiredComponent } from './../component-adaption-detail-required/component-adaption-detail-required.component';
import { ComponentAdaptionRequestComponent } from './../component-adaption-request/component-adaption-request.component';
import { ComponentAdaptionTypeRequiredComponent } from './../component-adaption-type-required/component-adaption-type-required.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAccessModePageRoutingModule } from './detail-access-mode-routing.module';

import { DetailAccessModePage } from './detail-access-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAccessModePageRoutingModule
  ],
  declarations: [DetailAccessModePage, ComponentAdaptionTypeRequiredComponent, ComponentAdaptionRequestComponent, ComponentAdaptionDetailRequiredComponent ]
})
export class DetailAccessModePageModule {}

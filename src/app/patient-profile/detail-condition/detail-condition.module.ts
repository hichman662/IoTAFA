import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConditionPageRoutingModule } from './detail-condition-routing.module';

import { DetailConditionPage } from './detail-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConditionPageRoutingModule
  ],
  declarations: [DetailConditionPage]
})
export class DetailConditionPageModule {}

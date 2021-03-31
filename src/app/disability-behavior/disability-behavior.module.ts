import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisabilityBehaviorPageRoutingModule } from './disability-behavior-routing.module';

import { DisabilityBehaviorPage } from './disability-behavior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisabilityBehaviorPageRoutingModule
  ],
  declarations: [DisabilityBehaviorPage]
})
export class DisabilityBehaviorPageModule {}

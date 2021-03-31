import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDisabilityPageRoutingModule } from './detail-disability-routing.module';

import { DetailDisabilityPage } from './detail-disability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDisabilityPageRoutingModule
  ],
  declarations: [DetailDisabilityPage]
})
export class DetailDisabilityPageModule {}

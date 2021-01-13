import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaregiversPageRoutingModule } from './caregivers-routing.module';

import { CaregiversPage } from './caregivers.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaregiversPageRoutingModule
  ],
  declarations: [CaregiversPage]
})
export class CaregiversPageModule {}

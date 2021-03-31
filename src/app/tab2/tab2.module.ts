<<<<<<< HEAD
=======
import { PatientProfilePageModule } from './../patient-profile/patient-profile.module';
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
<<<<<<< HEAD
    Tab2PageRoutingModule
=======
    Tab2PageRoutingModule,
    PatientProfilePageModule
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

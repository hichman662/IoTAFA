<<<<<<< HEAD
=======
import { DeviceTemplatePageModule } from './../device-template/device-template.module';
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
<<<<<<< HEAD
    Tab1PageRoutingModule
=======
    Tab1PageRoutingModule,
    DeviceTemplatePageModule
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

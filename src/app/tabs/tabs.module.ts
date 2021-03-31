import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
<<<<<<< HEAD
=======
import { MatIconModule } from '@angular/material/icon';
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    TabsPageRoutingModule
  ],
=======
    TabsPageRoutingModule,
    MatIconModule
],
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
  declarations: [TabsPage]
})
export class TabsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCommandsPageRoutingModule } from './list-commands-routing.module';

import { ListCommandsPage } from './list-commands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCommandsPageRoutingModule
  ],
  declarations: [ListCommandsPage]
})
export class ListCommandsPageModule {}

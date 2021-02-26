import { HttpClientModule } from '@angular/common/http';
import { ProfileCommandPageModule } from './../profile-command/profile-command.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCommandsPageRoutingModule } from './list-commands-routing.module';

import { ListCommandsPage } from './list-commands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCommandsPageRoutingModule,
    ProfileCommandPageModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ListCommandsPage]
})
export class ListCommandsPageModule {}

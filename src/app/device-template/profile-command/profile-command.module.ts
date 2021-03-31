import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCommandPageRoutingModule } from './profile-command-routing.module';

import { ProfileCommandPage } from './profile-command.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCommandPageRoutingModule
  ],
  declarations: [ProfileCommandPage]
})
export class ProfileCommandPageModule {}

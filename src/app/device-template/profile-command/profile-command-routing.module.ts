import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCommandPage } from './profile-command.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCommandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCommandPageRoutingModule {}

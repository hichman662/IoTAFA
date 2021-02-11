import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePropertyPage } from './profile-property.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePropertyPageRoutingModule {}

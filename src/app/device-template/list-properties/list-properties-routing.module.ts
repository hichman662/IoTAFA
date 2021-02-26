import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPropertiesPage } from './list-properties.page';

const routes: Routes = [
  {
    path: '',
    component: ListPropertiesPage
  },
  {
    path: 'profileProperty/:Id',
    loadChildren: () => import('../profile-property/profile-property.module').then( m => m.ProfilePropertyPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPropertiesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDisabilityPage } from './detail-disability.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDisabilityPage
  },
  {
    path: 'disability/:Id',
    component: DetailDisabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDisabilityPageRoutingModule {}

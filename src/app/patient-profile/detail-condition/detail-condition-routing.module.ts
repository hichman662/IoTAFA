import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailConditionPage } from './detail-condition.page';

const routes: Routes = [
  {
    path: '',
    component: DetailConditionPage
  },
  {
    path: 'condition/:Id',
    component: DetailConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailConditionPageRoutingModule {}

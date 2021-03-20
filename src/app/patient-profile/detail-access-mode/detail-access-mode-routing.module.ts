import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAccessModePage } from './detail-access-mode.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAccessModePage
  },
  {
    path: 'accessMode/:Id',
    component: DetailAccessModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAccessModePageRoutingModule {}

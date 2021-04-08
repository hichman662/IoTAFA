import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarePlanTemplatePage } from './care-plan-template.page';

const routes: Routes = [
  {
    path: '',
    component: CarePlanTemplatePage
  },
  {
    path: 'detail-care-plan-template/:Id',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./detail-care-plan-template/detail-care-plan-template.module').then( m => m.DetailCarePlanTemplatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarePlanTemplatePageRoutingModule {}

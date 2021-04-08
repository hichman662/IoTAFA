import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCarePlanTemplatePage } from './detail-care-plan-template.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCarePlanTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCarePlanTemplatePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarePlanTemplatePage } from './care-plan-template.page';

const routes: Routes = [
  {
    path: '',
    component: CarePlanTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarePlanTemplatePageRoutingModule {}

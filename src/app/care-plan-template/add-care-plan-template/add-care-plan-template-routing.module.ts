import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarePlanTemplatePage } from './add-care-plan-template.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarePlanTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarePlanTemplatePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisabilityBehaviorPage } from './disability-behavior.page';

const routes: Routes = [
  {
    path: '',
    component: DisabilityBehaviorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisabilityBehaviorPageRoutingModule {}

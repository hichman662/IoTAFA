import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceTemplateCommandPage } from './device-template-command.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceTemplateCommandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplateCommandPageRoutingModule {}

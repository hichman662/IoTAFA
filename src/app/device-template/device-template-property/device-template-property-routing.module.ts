import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceTemplatePropertyPage } from './device-template-property.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceTemplatePropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTemplatePropertyPageRoutingModule {}

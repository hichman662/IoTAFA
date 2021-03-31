import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDeviceTemplatePage } from './edit-device-template.page';

const routes: Routes = [
  {
    path: '',
    component: EditDeviceTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDeviceTemplatePageRoutingModule {}

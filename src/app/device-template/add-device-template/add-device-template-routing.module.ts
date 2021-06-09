import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceTemplatePage } from './add-device-template.page';


const routes: Routes = [
  {
    path: '',
    component: AddDeviceTemplatePage
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeviceTemplatePageRoutingModule {}

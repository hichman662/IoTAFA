import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCommandsPage } from './list-commands.page';

const routes: Routes = [
  {
    path: '',
    component: ListCommandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCommandsPageRoutingModule {}

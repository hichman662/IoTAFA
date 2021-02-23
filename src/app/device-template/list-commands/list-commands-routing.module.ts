
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCommandsPage } from './list-commands.page';

const routes: Routes = [
  {
    path: '',
    component: ListCommandsPage
  },
  {
    path: 'profile-command',
    loadChildren: () => import('../profile-command/profile-command.module').then( m => m.ProfileCommandPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCommandsPageRoutingModule {}

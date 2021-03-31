import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'tabs',
    component: TabsPage,
    children: [
      {
=======
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab0',
        loadChildren: () => import('../tab0/tab0.module').then(m => m.Tab0PageModule)
      },
      {
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
<<<<<<< HEAD
        path: '',
        redirectTo: '/tabs/tab1',
=======
        path: '**',
        redirectTo: '/tabs/tab0',
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
        pathMatch: 'full'
      }
    ]
  },
<<<<<<< HEAD
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
=======
>>>>>>> 5831dd3e7036d35a3c7bca27167a93f83e60562e
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

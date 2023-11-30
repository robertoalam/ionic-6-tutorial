import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },{
    path: 'alert',
    loadChildren: () => import('./pages/componentes/alert/alert.module').then( m => m.AlertPageModule)
  },{
    path: 'button',
    loadChildren: () => import('./pages/componentes/button/button.module').then( m => m.ButtonPageModule)
  },{
    path: 'input',
    loadChildren: () => import('./pages/componentes/input/input.module').then( m => m.InputPageModule)
  },{
    path: 'loading',
    loadChildren: () => import('./pages/componentes/loading/loading.module').then( m => m.LoadingPageModule)
  },{
    path: 'modal',
    loadChildren: () => import('./pages/componentes/modal/modal.module').then( m => m.ModalPageModule)
  },{
    path: 'toast',
    loadChildren: () => import('./pages/componentes/toast/toast.module').then( m => m.ToastPageModule)
  },{
    path: 'datetime',
    loadChildren: () => import('./pages/componentes/datetime/datetime.module').then( m => m.DatetimePageModule)
  },{
    path: 'datetime-button',
    loadChildren: () => import('./pages/componentes/datetime-button/datetime-button.module').then( m => m.DatetimeButtonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

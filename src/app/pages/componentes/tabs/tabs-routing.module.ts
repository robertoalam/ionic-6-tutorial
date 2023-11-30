import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AviaoComponent } from './aviao/aviao.component';
import { BarcoComponent } from './barco/barco.component';
import { CarroComponent } from './carro/carro.component';
import { TremComponent } from './trem/trem.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'aviao',
        component: AviaoComponent,
      },{
        path:'barco',
        component: BarcoComponent,
      },{
        path:'carro',
        component: CarroComponent,
      },{
        path:'trem',
        component: TremComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

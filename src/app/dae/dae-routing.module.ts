import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { GeneralComponent } from './components/general/general.component';
import { PlanesCnarpComponent } from './components/planes-cnarp/planes-cnarp.component';
import { MenuDaeComponent } from './components/menu-dae/menu-dae.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'requerimientos_frecuentes',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'planes_cnarp',
        component: PlanesCnarpComponent
      },
      {
        path: 'menu_dae',
        component: MenuDaeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { VictimasIncluidasComponent } from './components/victimas-incluidas/victimas-incluidas.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { IndividualComponent } from './components/individual/individual.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'victimas_incluidas',
        component: VictimasIncluidasComponent
      },
      {
        path: '',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'requerimientos_frecuentes',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'individual',
        component: IndividualComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRGIRoutingModule { }

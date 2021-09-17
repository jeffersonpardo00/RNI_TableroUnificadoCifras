import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { VisMercadoLaboralComponent } from './components/vis-mercado-laboral/vis-mercado-laboral.component';
import { VisorIgedComponent } from './components/visor-iged/visor-iged.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: VisMercadoLaboralComponent
      },
      {
        path: 'vis_mercado_laboral',
        component: VisMercadoLaboralComponent
      },
      {
        path: 'visor_iged',
        component: VisorIgedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RniRoutingModule { }

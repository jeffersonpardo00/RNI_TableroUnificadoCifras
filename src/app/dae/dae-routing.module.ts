import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { GeneralComponent } from './components/general/general.component';
import { PlanesCnarpComponent } from './components/planes-cnarp/planes-cnarp.component';
import { MenuDaeComponent } from './components/menu-dae/menu-dae.component';
import { EsqEspAcomComComponent } from './components/esq-esp-acom-com/esq-esp-acom-com.component';
import { PlanRetornoComponent } from './components/plan-retorno/plan-retorno.component';
import { SujetosColectivosComponent } from './components/sujetos-colectivos/sujetos-colectivos.component';
import { ReporteAcompanadosComponent } from './components/reporte-acompanados/reporte-acompanados.component';
import { SujetosEtnicosRegistroComponent } from './components/sujetos-etnicos-registro/sujetos-etnicos-registro.component';
import { ReparacionColectivaComponent } from './components/reparacion-colectiva/reparacion-colectiva.component';
import { RetornosReubicacionesComponent } from './components/retornos-reubicaciones/retornos-reubicaciones.component';
import { SegMedidaIndemColectivaComponent } from './components/seg-medida-indem-colectiva/seg-medida-indem-colectiva.component';
import { EnConstruccionComponent } from './components/en-construccion/en-construccion.component';
import { RetornoHogaresComponent } from './components/retorno-hogares/retorno-hogares.component';
import { SsvComponent } from './components/ssv/ssv.component';
import { IndividualComponent } from './components/individual/individual.component';

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
      },
      {
        path: 'esq_esp_acom_com',
        component: EsqEspAcomComComponent
      },
      {
        path: 'plan_retorno',
        component: PlanRetornoComponent
      },
      {
        path: 'sujetos_colectivos',
        component: SujetosColectivosComponent
      },
      {
        path: 'reporte_acompanados',
        component: ReporteAcompanadosComponent
      },
      {
        path: 'sujetos_etnicos_registro',
        component: SujetosEtnicosRegistroComponent
      },
      {
        path: 'reparacion_colectiva',
        component: ReparacionColectivaComponent
      },
      {
        path: 'retornos_reubicaciones',
        component: RetornosReubicacionesComponent
      },
      {
        path: 'Seg_Medida_Indem_Colectiva',
        component: SegMedidaIndemColectivaComponent
      },
      {
        path: 'en_construccion',
        component: EnConstruccionComponent
      },
      {
        path: 'retorno_hogares',
        component: RetornoHogaresComponent
      },
      {
        path: 'ssv',
        component: SsvComponent
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
export class DaeRoutingModule { }

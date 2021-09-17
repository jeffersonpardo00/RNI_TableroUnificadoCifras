import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { ReparacionIndividualComponent } from './components/reparacion-individual/reparacion-individual.component';
import { ReparacionColectivaComponent } from './components/reparacion-colectiva/reparacion-colectiva.component';
import { FondoReparacionComponent } from './components/fondo-reparacion/fondo-reparacion.component';
import { MedidasSatisRehabComponent } from './components/medidas-satis-rehab/medidas-satis-rehab.component';
import { MedidasSatisfaccionComponent } from './components/medidas-satisfaccion/medidas-satisfaccion.component';
import { RetornosReubicacionesComponent } from './components/retornos-reubicaciones/retornos-reubicaciones.component';
import { EsquEspecAcompComponent } from './components/esqu-espec-acomp/esqu-espec-acomp.component' ;
import { EsqEspAcomFamComponent } from './components/esq-esp-acom-fam/esq-esp-acom-fam.component';
import { PlanesRetReubiEsqComponent } from './components/planes-ret-reubi-esq/planes-ret-reubi-esq.component';
import { EsqEspAcompComunitarioComponent } from './components/esq-esp-acomp-comunitario/esq-esp-acomp-comunitario.component';
import { EsqEspAcomHogaresComponent } from './components/esq-esp-acom-hogares/esq-esp-acom-hogares.component';
import { AcompanadosComponent } from './components/acompanados/acompanados.component';

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
        path: 'reparacion_individual',
        component: ReparacionIndividualComponent
      },
      {
        path: 'fondo_reparacion',
        component: FondoReparacionComponent
      },
      {
        path: 'reparacion_colectiva',
        component: ReparacionColectivaComponent
      },
      {
        path: 'medidas_satis_rehab',
        component: MedidasSatisRehabComponent
      },
      {
        path: 'medidas_satisfaccion',
        component: MedidasSatisfaccionComponent
      },
      {
        path: 'retornos_reubicaciones',
        component: RetornosReubicacionesComponent
      },
      {
        path: 'esqu_espec_acomp',
        component: EsquEspecAcompComponent
      },
      {
        path: 'esqu_espec_acomp_fam',
        component: EsqEspAcomFamComponent
      },
      {
        path: 'planes_ret_reubi',
        component: PlanesRetReubiEsqComponent
      },
      {
        path: 'esq_esp_acomp_comunitario',
        component: EsqEspAcompComunitarioComponent
      },
      {
        path: 'esq_esp_acomp_hogares',
        component: EsqEspAcomHogaresComponent
      },
      {
        path: 'acompanados',
        component: AcompanadosComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrRoutingModule { }

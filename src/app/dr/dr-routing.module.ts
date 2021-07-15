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
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrRoutingModule { }

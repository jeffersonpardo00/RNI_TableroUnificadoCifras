import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrRoutingModule } from './dr-routing.module';
import { IndexComponent } from './components/index/index.component';

import { MaterialModule } from '../material/material.module';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { ReparacionIndividualComponent } from './components/reparacion-individual/reparacion-individual.component';
import { FondoReparacionComponent } from './components/fondo-reparacion/fondo-reparacion.component';
import { ReparacionColectivaComponent } from './components/reparacion-colectiva/reparacion-colectiva.component';
import { MedidasSatisRehabComponent } from './components/medidas-satis-rehab/medidas-satis-rehab.component';
import { MedidasSatisfaccionComponent } from './components/medidas-satisfaccion/medidas-satisfaccion.component';
import { RetornosReubicacionesComponent } from './components/retornos-reubicaciones/retornos-reubicaciones.component';
import { EsquEspecAcompComponent } from './components/esqu-espec-acomp/esqu-espec-acomp.component';
import { EsqEspAcomFamComponent } from './components/esq-esp-acom-fam/esq-esp-acom-fam.component';
import { PlanesRetReubiEsqComponent } from './components/planes-ret-reubi-esq/planes-ret-reubi-esq.component';
import { EsqEspAcompComunitarioComponent } from './components/esq-esp-acomp-comunitario/esq-esp-acomp-comunitario.component';
import { EsqEspAcomHogaresComponent } from './components/esq-esp-acom-hogares/esq-esp-acom-hogares.component';
import { AcompanadosComponent } from './components/acompanados/acompanados.component';


@NgModule({
  declarations: [
    IndexComponent,
    RequerimientosFrecuentesComponent,
    ReparacionIndividualComponent,
    FondoReparacionComponent,
    ReparacionColectivaComponent,
    MedidasSatisRehabComponent,
    MedidasSatisfaccionComponent,
    RetornosReubicacionesComponent,
    EsquEspecAcompComponent,
    EsqEspAcomFamComponent,
    PlanesRetReubiEsqComponent,
    EsqEspAcompComunitarioComponent,
    EsqEspAcomHogaresComponent,
    AcompanadosComponent],
  imports: [
    CommonModule,
    DrRoutingModule,
    MaterialModule
  ]
})
export class DrModule { }

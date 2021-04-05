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
    EsquEspecAcompComponent],
  imports: [
    CommonModule,
    DrRoutingModule,
    MaterialModule
  ]
})
export class DrModule { }

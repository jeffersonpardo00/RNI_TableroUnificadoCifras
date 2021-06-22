import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { DGSHRoutingModule } from './dgsh-routing.module';
import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { PrevencionComponent } from './components/prevencion/prevencion.component';
import { AsistenciasTecnicasComponent } from './components/asistencias-tecnicas/asistencias-tecnicas.component';
import { SesionesSeguimientoComponent } from './components/sesiones-seguimiento/sesiones-seguimiento.component';
import { AtencionInmediatezComponent } from './components/atencion-inmediatez/atencion-inmediatez.component';
import { AyudaHumanitariaComponent } from './components/ayuda-humanitaria/ayuda-humanitaria.component';
import { ServicioCiudadanoComponent } from './components/servicio-ciudadano/servicio-ciudadano.component';
import { AsistenciaHumanitariaComponent } from './components/asistencia-humanitaria/asistencia-humanitaria.component';
import { GeneralComponent } from './components/general/general.component';
import { EntTerrApoyadasComponent } from './components/ent-terr-apoyadas/ent-terr-apoyadas.component';


@NgModule({
  declarations: [IndexComponent, RequerimientosFrecuentesComponent, PrevencionComponent, AsistenciasTecnicasComponent, SesionesSeguimientoComponent, AtencionInmediatezComponent, AyudaHumanitariaComponent, ServicioCiudadanoComponent, AsistenciaHumanitariaComponent, GeneralComponent, EntTerrApoyadasComponent],
  imports: [
    CommonModule,
    DGSHRoutingModule,
    MaterialModule
  ]
})
export class DGSHModule { }

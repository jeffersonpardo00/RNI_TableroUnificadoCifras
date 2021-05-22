import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: 'prevencion',
        component: PrevencionComponent
      },
      {
        path: 'asistencias_tecnicas',
        component: AsistenciasTecnicasComponent
      },
      {
        path: 'sesiones_seguimiento',
        component: SesionesSeguimientoComponent
      },
      {
        path: 'atencion_inmediatez',
        component: AtencionInmediatezComponent
      },
      {
        path: 'ayuda_humanitaria',
        component: AyudaHumanitariaComponent
      },
      {
        path: 'servicio_ciudadano',
        component: ServicioCiudadanoComponent
      },
      {
        path: 'asistencia_humanitaria',
        component: AsistenciaHumanitariaComponent
      },
      {
        path: 'general',
        component: GeneralComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DGSHRoutingModule { }

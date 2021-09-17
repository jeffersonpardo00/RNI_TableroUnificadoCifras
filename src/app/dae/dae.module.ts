import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaeRoutingModule } from './dae-routing.module';
import { MaterialModule } from '../material/material.module';
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


@NgModule({
  declarations: [
    IndexComponent,
    RequerimientosFrecuentesComponent,
    GeneralComponent,
    PlanesCnarpComponent,
    MenuDaeComponent,
    EsqEspAcomComComponent,
    PlanRetornoComponent,
    SujetosColectivosComponent,
    ReporteAcompanadosComponent,
    SujetosEtnicosRegistroComponent,
    ReparacionColectivaComponent,
    RetornosReubicacionesComponent,
    SegMedidaIndemColectivaComponent],
  imports: [
    CommonModule,
    DaeRoutingModule,
    MaterialModule
  ]
})
export class DaeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DGIRoutingModule } from './dgi-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MaterialModule } from '../material/material.module';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { GestionInterinstitucionalComponent } from './components/gestion-interinstitucional/gestion-interinstitucional.component';
import { VictimasSuperaronSVComponent } from './components/victimas-superaron-sv/victimas-superaron-sv.component';
import { SolAccesoOfertaComponent } from './components/sol-acceso-oferta/sol-acceso-oferta.component';
import { BalanceAccesoEfectivoComponent } from './components/balance-acceso-efectivo/balance-acceso-efectivo.component';
import { SnarivComponent } from './components/snariv/snariv.component';
import { GrupoGestionProyectosComponent } from './components/grupo-gestion-proyectos/grupo-gestion-proyectos.component';
import { CoorNacionTerritorioComponent } from './components/coor-nacion-territorio/coor-nacion-territorio.component';
import { EntidadesTerritorialesComponent } from './components/entidades-territoriales/entidades-territoriales.component';
import { CentrosRegionalesComponent } from './components/centros-regionales/centros-regionales.component';
import { ParticipacionComponent } from './components/participacion/participacion.component';


@NgModule({
  declarations: [IndexComponent, RequerimientosFrecuentesComponent, GestionInterinstitucionalComponent, VictimasSuperaronSVComponent, SolAccesoOfertaComponent, BalanceAccesoEfectivoComponent, SnarivComponent, GrupoGestionProyectosComponent, CoorNacionTerritorioComponent, EntidadesTerritorialesComponent, CentrosRegionalesComponent, ParticipacionComponent],
  imports: [
    CommonModule,
    DGIRoutingModule,
    MaterialModule
  ]
})
export class DGIModule { }

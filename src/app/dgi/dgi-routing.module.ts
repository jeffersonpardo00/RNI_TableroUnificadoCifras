import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
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
import { InfoProyOfertadosComponent } from './components/info-proy-ofertados/info-proy-ofertados.component';
import { OcadPazComponent } from './components/ocad-paz/ocad-paz.component';
import { JornadasFortalecimientoComponent } from './components/jornadas-fortalecimiento/jornadas-fortalecimiento.component';
import { FortalecimientoComponent } from './components/fortalecimiento/fortalecimiento.component';
import { EnConstruccionComponent } from './components/en-construccion/en-construccion.component';

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
        path: 'gestion_interinstitucional',
        component: GestionInterinstitucionalComponent
      },
      {
        path: 'victimas_superaron_sv',
        component: VictimasSuperaronSVComponent
      },
      {
        path: 'sol_acceso_oferta',
        component: SolAccesoOfertaComponent
      },
      {
        path: 'balance_acceso_efectivo',
        component: BalanceAccesoEfectivoComponent
      },
      {
        path: 'snariv',
        component: SnarivComponent
      },
      {
        path: 'grupo_gestion_proyectos',
        component: GrupoGestionProyectosComponent
      },
      {
        path: 'coor_nacion_territorio',
        component: CoorNacionTerritorioComponent
      },
      {
        path: 'entidades_territoriales',
        component: EntidadesTerritorialesComponent
      },
      {
        path: 'centros_regionales',
        component: CentrosRegionalesComponent
      },
      {
        path: 'participacion',
        component: ParticipacionComponent
      },
      {
        path: 'info_proyectos_ofertados',
        component: InfoProyOfertadosComponent
      },
      {
        path: 'ocad_paz',
        component: OcadPazComponent
      },
      {
        path: 'jornadas_fortalecimiento',
        component: JornadasFortalecimientoComponent
      },
      {
        path: 'fortalecimiento',
        component: FortalecimientoComponent
      },
      {
        path: 'en-construccion',
        component: EnConstruccionComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DGIRoutingModule { }

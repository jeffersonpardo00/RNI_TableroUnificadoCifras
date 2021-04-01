import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { VictimasIncluidasComponent } from './components/victimas-incluidas/victimas-incluidas.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { IndividualComponent } from './components/individual/individual.component';
import { ViaAdministrativaComponent } from './components/via-administrativa/via-administrativa.component';
import { RevocatoriaAutosComponent } from './components/revocatoria-autos/revocatoria-autos.component';
import { RecursosTramitadosComponent } from './components/recursos-tramitados/recursos-tramitados.component';
import { EventosMasivosComponent } from './components/eventos-masivos/eventos-masivos.component';
import { ColectivosComponent } from './components/colectivos/colectivos.component';
import { ExclusionesComponent } from './components/exclusiones/exclusiones.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'victimas_incluidas',
        component: VictimasIncluidasComponent
      },
      {
        path: '',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'requerimientos_frecuentes',
        component: RequerimientosFrecuentesComponent
      },
      {
        path: 'individual',
        component: IndividualComponent
      },
      {
        path: 'via_administrativa',
        component: ViaAdministrativaComponent
      },
      {
        path: 'recursos_tramitados',
        component: RecursosTramitadosComponent
      },
      {
        path: 'revocatoria_autos',
        component: RevocatoriaAutosComponent
      },
      {
        path: 'eventos_masivos',
        component: EventosMasivosComponent
      },
      {
        path: 'colectivos',
        component: ColectivosComponent
      },
      {
        path: 'exclusiones',
        component: ExclusionesComponent
      },
      {
        path: 'novedades',
        component: NovedadesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRGIRoutingModule { }

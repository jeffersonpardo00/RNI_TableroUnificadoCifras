import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRGIRoutingModule } from './drgi-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';
import { VictimasIncluidasComponent } from './components/victimas-incluidas/victimas-incluidas.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { IndividualComponent } from './components/individual/individual.component';
import { ViaAdministrativaComponent } from './components/via-administrativa/via-administrativa.component';
import { RecursosTramitadosComponent } from './components/recursos-tramitados/recursos-tramitados.component';
import { RevocatoriaAutosComponent } from './components/revocatoria-autos/revocatoria-autos.component';
import { EventosMasivosComponent } from './components/eventos-masivos/eventos-masivos.component';
import { ColectivosComponent } from './components/colectivos/colectivos.component';
import { ExclusionesComponent } from './components/exclusiones/exclusiones.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

@NgModule({
  declarations: [IndexComponent, VictimasIncluidasComponent, RequerimientosFrecuentesComponent, IndividualComponent, ViaAdministrativaComponent, RecursosTramitadosComponent, RevocatoriaAutosComponent, EventosMasivosComponent, ColectivosComponent, ExclusionesComponent, NovedadesComponent],
  imports: [
    CommonModule,
    DRGIRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class DRGIModule { }

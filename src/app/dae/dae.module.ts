import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaeRoutingModule } from './dae-routing.module';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { GeneralComponent } from './components/general/general.component';
import { PlanesCnarpComponent } from './components/planes-cnarp/planes-cnarp.component';
import { MenuDaeComponent } from './components/menu-dae/menu-dae.component';


@NgModule({
  declarations: [
    IndexComponent,
    RequerimientosFrecuentesComponent,
    GeneralComponent,
    PlanesCnarpComponent,
    MenuDaeComponent],
  imports: [
    CommonModule,
    DaeRoutingModule,
    MaterialModule
  ]
})
export class DaeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaeRoutingModule } from './dae-routing.module';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './components/index/index.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { GeneralComponent } from './components/general/general.component';


@NgModule({
  declarations: [IndexComponent, RequerimientosFrecuentesComponent, GeneralComponent],
  imports: [
    CommonModule,
    DaeRoutingModule,
    MaterialModule
  ]
})
export class DaeModule { }

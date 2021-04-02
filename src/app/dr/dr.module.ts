import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrRoutingModule } from './dr-routing.module';
import { IndexComponent } from './components/index/index.component';

import { MaterialModule } from '../material/material.module';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';


@NgModule({
  declarations: [IndexComponent, RequerimientosFrecuentesComponent],
  imports: [
    CommonModule,
    DrRoutingModule,
    MaterialModule
  ]
})
export class DrModule { }

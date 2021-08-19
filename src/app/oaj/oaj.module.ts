import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OajRoutingModule } from './oaj-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { PqrTutelasComponent } from './components/pqr-tutelas/pqr-tutelas.component';


@NgModule({
  declarations: [IndexComponent, RequerimientosFrecuentesComponent, PqrTutelasComponent],
  imports: [
    CommonModule,
    OajRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class OajModule { }

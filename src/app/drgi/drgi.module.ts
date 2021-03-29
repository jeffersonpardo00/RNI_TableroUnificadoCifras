import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRGIRoutingModule } from './drgi-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';
import { VictimasIncluidasComponent } from './components/victimas-incluidas/victimas-incluidas.component';
import { RequerimientosFrecuentesComponent } from './components/requerimientos-frecuentes/requerimientos-frecuentes.component';
import { IndividualComponent } from './components/individual/individual.component';

@NgModule({
  declarations: [IndexComponent, VictimasIncluidasComponent, RequerimientosFrecuentesComponent, IndividualComponent],
  imports: [
    CommonModule,
    DRGIRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class DRGIModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RniRoutingModule } from './rni-routing.module';
import { IndexComponent } from './components/index/index.component';
import { VisMercadoLaboralComponent } from './components/vis-mercado-laboral/vis-mercado-laboral.component';
import { MaterialModule } from '../material/material.module';
import { VisorIgedComponent } from './components/visor-iged/visor-iged.component';

@NgModule({
  declarations: [IndexComponent, VisMercadoLaboralComponent, VisorIgedComponent],
  imports: [
    CommonModule,
    RniRoutingModule,
    MaterialModule
  ]
})
export class RniModule { }

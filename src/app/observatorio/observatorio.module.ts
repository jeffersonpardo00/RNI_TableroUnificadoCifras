import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservatorioRoutingModule } from './observatorio-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';
import { ArchivosDescargablesComponent } from './components/archivos-descargables/archivos-descargables.component';


@NgModule({
  declarations: [IndexComponent, ArchivosDescargablesComponent],
  imports: [
    CommonModule,
    ObservatorioRoutingModule,
    LayoutModule,
    MaterialModule,
  ]
})
export class ObservatorioModule { }

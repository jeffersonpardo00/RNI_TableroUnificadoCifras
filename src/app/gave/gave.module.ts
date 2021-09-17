import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaveRoutingModule } from './gave-routing.module';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './components/index/index.component';
import { GeneralComponent } from './components/general/general.component';
import { SegSitTerritorioComponent } from './components/seg-sit-territorio/seg-sit-territorio.component';

@NgModule({
  declarations: [IndexComponent, GeneralComponent, SegSitTerritorioComponent],
  imports: [
    CommonModule,
    GaveRoutingModule,
    MaterialModule
  ]
})
export class GaveModule { }

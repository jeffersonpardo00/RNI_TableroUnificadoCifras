import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRGIRoutingModule } from './drgi-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';
import { VictimasIncluidasComponent } from './components/victimas-incluidas/victimas-incluidas.component';

@NgModule({
  declarations: [IndexComponent, VictimasIncluidasComponent],
  imports: [
    CommonModule,
    DRGIRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class DRGIModule { }

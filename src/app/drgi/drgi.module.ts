import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRGIRoutingModule } from './drgi-routing.module';
import { IndexComponent } from './components/index/index.component';


import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    DRGIRoutingModule
  ]
})
export class DRGIModule { }

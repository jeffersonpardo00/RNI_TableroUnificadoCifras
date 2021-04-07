import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralesInversionRoutingModule } from './generales-inversion-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    GeneralesInversionRoutingModule
  ]
})
export class GeneralesInversionModule { }

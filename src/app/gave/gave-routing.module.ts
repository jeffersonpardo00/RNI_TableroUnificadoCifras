import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { GeneralComponent } from './components/general/general.component';
import { SegSitTerritorioComponent } from './components/seg-sit-territorio/seg-sit-territorio.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: GeneralComponent
      },
      {
        path: 'victimas_exterior',
        component: GeneralComponent
      },
      {
        path: 'seg_sit_territorio',
        component: SegSitTerritorioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaveRoutingModule { }

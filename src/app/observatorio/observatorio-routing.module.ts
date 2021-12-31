import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { ArchivosDescargablesComponent } from './components/archivos-descargables/archivos-descargables.component';
import { SegSituaTerritorioComponent } from './components/seg-situa-territorio/seg-situa-territorio.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: ArchivosDescargablesComponent
      },
      {
        path: 'archivos_descargables',
        component: ArchivosDescargablesComponent
      } ,
      {
        path: 'seg_situa_territorio',
        component: SegSituaTerritorioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservatorioRoutingModule { }

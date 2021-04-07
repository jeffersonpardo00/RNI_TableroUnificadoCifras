import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadChildren: () => import ('./home/home.module').then (m => m.HomeModule)
        },
        {
          path: 'drgi',
          loadChildren: () => import ('./drgi/drgi.module').then (m => m.DRGIModule)
        },
        {
          path: 'dr',
          loadChildren: () => import ('./dr/dr.module').then (m => m.DrModule)
        },
        {
          path: 'dgsh',
          loadChildren: () => import ('./dgsh/dgsh.module').then(m => m.DGSHModule)
        },
        {
          path: 'dgi',
          loadChildren: () => import ('./dgi/dgi.module').then(m => m.DGIModule)
        },
        {
          path: 'dae',
          loadChildren: () => import ('./dae/dae.module').then(m => m.DaeModule)
        },
        {
          path: 'generales_inversion',
          loadChildren: () => import ('./generales-inversion/generales-inversion.module').then(m => m.GeneralesInversionModule)
        }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

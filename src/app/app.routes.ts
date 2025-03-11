import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'pipes basicos',
    loadComponent : () => import('./pages/basic-pages/basic-pages.component')

  },
  {
    path: 'custom',
    title: 'pipes personalizados',
    loadComponent : () => import('./pages/custom-page/custom-page.component')

  },
  {
    path: 'number',
    title: 'pipes numericos',
    loadComponent : () => import('./pages/number-page/number-page.component')

  },
  {
    path: 'uncommon',
    title: 'pipes poco comunes',
    loadComponent : () => import('./pages/uncommon-page/uncommon-page.component')

  },
  {
    path: '**',
    redirectTo: 'basic'
  }

];

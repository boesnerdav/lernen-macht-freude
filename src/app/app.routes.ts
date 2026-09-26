import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home.component').then((module) => module.HomeComponent) },
  { path: 'ueber-mich', loadComponent: () => import('./about.component').then((module) => module.AboutComponent) },
  { path: 'datenschutz', loadComponent: () => import('./privacy.component').then((module) => module.PrivacyComponent) },
  { path: '**', redirectTo: '' }
];
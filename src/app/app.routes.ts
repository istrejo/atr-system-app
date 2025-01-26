import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/pages/login/login.component'),
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./auth/pages/register/register.component'),
  },
];

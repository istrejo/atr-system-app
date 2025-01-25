import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/components/login/login.component'),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./auth/components/register/register.component'),
  },
];

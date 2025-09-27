import { Routes } from '@angular/router';
import {AuthFeatures} from './features/auth/auth-features';
import {DashboardFeatures} from './features/dashboard/dashboard-features';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardFeatures,
  },
  {
    path: 'auth',
    component: AuthFeatures
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

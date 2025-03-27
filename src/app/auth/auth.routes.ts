import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'log-in',
        loadComponent: () =>
          import('./log-in/log-in.component').then((m) => m.LogInComponent),
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./registro/registro.component').then((m) => m.RegistroComponent),
      },
      {
        path: 'recuperar-contrasenia',
        loadComponent: () =>
          import('./recuperar-contrasenia/recuperar-contrasenia.component').then((m) => m.RecuperarContraseniaComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  },
];

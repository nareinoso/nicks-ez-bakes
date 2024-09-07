import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './core/components/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

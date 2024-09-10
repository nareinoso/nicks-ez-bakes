import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { HomeComponent } from './components/home/home.component';
import { LearnComponent } from './components/learn/learn.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

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
      {
        path: 'recipes',
        component: RecipesComponent,
      },
      {
        path: 'learn',
        component: LearnComponent,
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

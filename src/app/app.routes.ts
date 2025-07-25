import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AboutComponent } from './features/about/about.component';
import { EquipmentComponent } from './features/equipment/equipment.component';
import { HomeComponent } from './features/home/home.component';
import { LearnComponent } from './features/learn/learn.component';
import { RecipeDetailsComponent } from './features/recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './features/recipes/recipes.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'recipes',
        component: RecipesComponent,
      },
      {
        path: 'recipe/:slug',
        component: RecipeDetailsComponent,
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

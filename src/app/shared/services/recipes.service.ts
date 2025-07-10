import { Injectable } from '@angular/core';
import { Recipe } from '../models';
import { Observable, of } from 'rxjs';

const RECIPES: Recipe[] = [
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    imageUrl: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    type: 'Cookies',
    mainIngredient: 'Raspberry',
    occasion: "Valentine's Day",
    difficulty: 3,
    dateAdded: new Date(2023, 2, 14),
  },
  {
    slug: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    imageUrl: 'assets/images/cookies/chocolate-chip-cookies.jpg',
    type: 'Cookies',
    mainIngredient: 'Chocolate Chips',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2015, 6, 18),
  },
  {
    slug: 'apple-cake',
    name: 'Apple Cake',
    imageUrl: 'assets/images/cakes/apple-cake.jpg',
    type: 'Cakes',
    mainIngredient: 'Apple',
    occasion: 'Christmas',
    difficulty: 2,
    dateAdded: new Date(2019, 12, 24),
  },
  {
    slug: 'pecan-pie',
    name: 'Pecan Pie',
    imageUrl: 'assets/images/pies/pecan-pie.jpg',
    type: 'Pies',
    mainIngredient: 'Pecan',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2018, 11, 1),
  },
  {
    name: 'Cake Pops',
    slug: 'cake-pops',
    imageUrl: 'assets/images/cakes/cake-pops.jpg',
    type: 'Cakes',
    mainIngredient: 'Sprinkles',
    occasion: 'Birthday',
    difficulty: 2,
    dateAdded: new Date(2020, 5, 1),
  },
  {
    name: 'Salted Caramel Tart',
    slug: 'salted-caramel-tart',
    imageUrl: 'assets/images/tarts/salted-caramel-tart.jpg',
    type: 'Tarts',
    mainIngredient: 'Caramel',
    occasion: '',
    difficulty: 3,
    dateAdded: new Date(2014, 8, 7),
  },
  {
    name: 'Key Lime Pie',
    slug: 'key-lime-pie',
    imageUrl: 'assets/images/pies/key-lime-pie.jpg',
    type: 'Pies',
    mainIngredient: 'Key Lime',
    occasion: 'Easter',
    difficulty: 2,
    dateAdded: new Date(2022, 12, 12),
  },
  {
    name: 'Lemon Bars',
    slug: 'lemon-bars',
    imageUrl: 'assets/images/bars/lemon-bars.jpg',
    type: 'Brownies & Bars',
    mainIngredient: 'Lemon',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2019, 3, 14),
  },
  {
    name: 'Cinnamon Toast Crunch Cheesecake',
    slug: 'cinnamon-toast-crunch-cheesecake',
    imageUrl: 'assets/images/cheesecakes/cinnamon-toast-crunch-cheesecake.jpg',
    type: 'Cheesecake',
    mainIngredient: ' Cinnamon Toast Crunch',
    occasion: 'Easter',
    difficulty: 3,
    dateAdded: new Date(2024, 2, 20),
  },
  {
    name: 'Carrot Cake',
    slug: 'carrot-cake',
    imageUrl: 'assets/images/cakes/carrot-cake.jpg',
    type: 'Cakes',
    mainIngredient: 'Carrot',
    occasion: 'Birthday',
    difficulty: 3,
    dateAdded: new Date(2020, 9, 17),
  },
];

@Injectable({ providedIn: 'root' })
export class RecipesService {
  public getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  public getRecipe(slug?: string | null): Observable<Recipe | null> {
    if (!slug) {
      return of(null);
    }
    const recipe = RECIPES.find(
      (r) => r.slug?.toLowerCase().replace(/\s+/g, '-') === slug
    );
    return of(recipe || null);
  }
}

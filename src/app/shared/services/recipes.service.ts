import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models';

const RECIPES: Recipe[] = [
  {
    slug: 'brownies',
    name: 'Brownies',
    imageUrl: 'assets/images/bars/brownies.png',
    types: ['bars'],
  },
  {
    slug: 'lemon-bars',
    name: 'Lemon Bars',
    imageUrl: 'assets/images/bars/lemon-bars.jpg',
    types: ['bars'],
  },
  {
    slug: 'millionaire-shortbread',
    name: 'Millionaire Shortbread',
    imageUrl: 'assets/images/bars/millionaire-shortbread.jpg',
    types: ['bars'],
  },
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    imageUrl: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    types: ['cakes'],
    occasion: ['birthday'],
  },
  {
    slug: 'banana-bread',
    name: 'Banana Bread',
    imageUrl: 'assets/images/bread/banana-bread.png',
    types: ['bread'],
  },
  {
    slug: 'banana-scones',
    name: 'Banana Scones',
    imageUrl: 'assets/images/breakfast/banana-scones.jpg',
    types: ['breakfast'],
  },
  {
    slug: 'pancakes',
    name: 'Pancakes',
    imageUrl: 'assets/images/breakfast/pancakes.jpg',
    types: ['breakfast'],
  },
  {
    slug: 'apple-cake',
    name: 'Apple Cake',
    imageUrl: 'assets/images/cakes/apple-cake.jpg',
    types: ['cakes'],
  },
  {
    slug: 'banana-sheet-cake',
    name: 'Banana Sheet Cake',
    imageUrl: 'assets/images/cakes/banana-sheet-cake.jpg',
    types: ['cakes'],
  },
  {
    slug: 'carrot-cake',
    name: 'Carrot Cake',
    imageUrl: 'assets/images/cakes/carrot-cake2.png',
    types: ['cakes'],
  },
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    imageUrl: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    types: ['cakes'],
  },
  {
    slug: 'christmas-cake',
    name: 'Christmas Cake',
    imageUrl: 'assets/images/cakes/christmas-cake.jpg',
    types: ['cakes'],
  },
  {
    slug: 'lemon-blueberry-cake',
    name: 'Lemon Blueberry Cake',
    imageUrl: 'assets/images/cakes/lemon-blueberry-cake.png',
    types: ['cakes'],
  },
  {
    slug: 'pineapple-cake',
    name: 'Pineapple Cake',
    imageUrl: 'assets/images/cakes/pineapple-cake.jpg',
    types: ['cakes'],
  },
  {
    slug: 'wedding-cake',
    name: 'Two-tier Wedding Cake',
    imageUrl: 'assets/images/cakes/wedding-cake.png',
    types: ['cakes'],
  },
  {
    slug: 'basque-cheesecake',
    name: 'Basque Cheesecake',
    imageUrl: 'assets/images/cheesecakes/basque-cheesecake.jpg',
    types: ['cheesecakes'],
  },
  {
    slug: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    imageUrl: 'assets/images/cheesecakes/blueberry-cheesecake.jpg',
    types: ['cheesecakes'],
  },
  {
    slug: 'cinnamon-toast-crunch-cheesecake',
    name: 'Cinnamon Toast Crunch Cheesecake',
    imageUrl: 'assets/images/cheesecakes/cinnamon-toast-crunch-cake2.jpg',
    types: ['cheesecakes'],
  },
  {
    slug: 'chocolate-chunk-cookies',
    name: 'Chocolate Chunk Cookies',
    imageUrl: 'assets/images/cookies/chocolate-chunk-cookies.jpg',
    types: ['cookies'],
  },
  {
    slug: 'chocolate-oatmeal-cookies',
    name: 'Chocolate Oatmeal Cookies',
    imageUrl: 'assets/images/cookies/chocolate-oatmeal-cookies.jpg',
    types: ['cookies'],
  },
  {
    slug: 'chocolate-peppermint-cookies',
    name: 'Chocolate Peppermint Cookies',
    imageUrl: 'assets/images/cookies/chocolate-peppermint-cookies.jpg',
    types: ['cookies'],
  },
  {
    slug: 'gingersnaps',
    name: 'Gingersnaps',
    imageUrl: 'assets/images/cookies/gingersnaps.jpg',
    types: ['cookies'],
  },
  {
    slug: 'snickerdoodles',
    name: 'Snickerdoodles',
    imageUrl: 'assets/images/cookies/snickerdoodles.jpg',
    types: ['cookies'],
  },
  {
    slug: 'xmas-cookies',
    name: 'Christmas Cookies',
    imageUrl: 'assets/images/cookies/xmas-cookies.jpg',
    types: ['cookies'],
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

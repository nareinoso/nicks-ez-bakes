import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models';

const RECIPES_DUMMY_DATA: Recipe[] = [
  {
    slug: 'brownies',
    name: 'Brownies',
    imageUrl: 'assets/images/bars/brownies.png',
    types: ['bars'],
    flavors: ['chocolate'],
    occasion: [],
  },
  {
    slug: 'lemon-bars',
    name: 'Lemon Bars',
    imageUrl: 'assets/images/bars/lemon-bars.jpg',
    types: ['bars'],
    flavors: ['citrus'],
    occasion: [],
  },
  {
    slug: 'millionaire-shortbread',
    name: 'Millionaire Shortbread',
    imageUrl: 'assets/images/bars/millionaire-shortbread.jpg',
    types: ['bars'],
    flavors: ['chocolate'],
    occasion: [],
  },
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    imageUrl: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    types: ['cake'],
    occasion: ['birthday'],
    flavors: ['chocolate', 'fruity'],
  },
  {
    slug: 'banana-bread',
    name: 'Banana Bread',
    imageUrl: 'assets/images/bread/banana-bread.png',
    types: ['bread'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'banana-scones',
    name: 'Banana Scones',
    imageUrl: 'assets/images/breakfast/banana-scones.jpg',
    types: ['breakfast'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'pancakes',
    name: 'Pancakes',
    imageUrl: 'assets/images/breakfast/pancakes.jpg',
    types: ['breakfast'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'apple-cake',
    name: 'Apple Cake',
    imageUrl: 'assets/images/cakes/apple-cake.jpg',
    types: ['cake'],
    flavors: ['fruity', 'spiced'],
    occasion: [],
  },
  {
    slug: 'banana-sheet-cake',
    name: 'Banana Sheet Cake',
    imageUrl: 'assets/images/cakes/banana-sheet-cake.jpg',
    types: ['cake'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'carrot-cake',
    name: 'Carrot Cake',
    imageUrl: 'assets/images/cakes/carrot-cake2.png',
    types: ['cake'],
    flavors: ['spiced'],
    occasion: [],
  },
  {
    slug: 'christmas-cake',
    name: 'Christmas Cake',
    imageUrl: 'assets/images/cakes/christmas-cake.jpg',
    types: ['cake'],
    flavors: ['nutty', 'fruity'],
    occasion: [],
  },
  {
    slug: 'lemon-blueberry-cake',
    name: 'Lemon Blueberry Cake',
    imageUrl: 'assets/images/cakes/lemon-blueberry-cake.png',
    types: ['cake'],
    flavors: ['citrus', 'fruity'],
    occasion: [],
  },
  {
    slug: 'pineapple-cake',
    name: 'Pineapple Cake',
    imageUrl: 'assets/images/cakes/pineapple-cake.jpg',
    types: ['cake'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'wedding-cake',
    name: 'Two-tier Wedding Cake',
    imageUrl: 'assets/images/cakes/wedding-cake.png',
    types: ['cake'],
    flavors: ['chocolate', 'fruity', 'spiced'],
    occasion: [],
  },
  {
    slug: 'basque-cheesecake',
    name: 'Basque Cheesecake',
    imageUrl: 'assets/images/cheesecakes/basque-cheesecake.jpg',
    types: ['cheesecake'],
    flavors: ['rich'],
    occasion: [],
  },
  {
    slug: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    imageUrl: 'assets/images/cheesecakes/blueberry-cheesecake.jpg',
    types: ['cheesecake'],
    flavors: ['fruity', 'rich'],
    occasion: [],
  },
  {
    slug: 'cinnamon-toast-crunch-cheesecake',
    name: 'Cinnamon Toast Crunch Cheesecake',
    imageUrl: 'assets/images/cheesecakes/cinnamon-toast-crunch-cake2.jpg',
    types: ['cheesecake'],
    flavors: ['spiced', 'rich'],
    occasion: [],
  },
  {
    slug: 'chocolate-chunk-cookies',
    name: 'Chocolate Chunk Cookies',
    imageUrl: 'assets/images/cookies/chocolate-chunk-cookies.jpg',
    types: ['cookies'],
    flavors: ['chocolate'],
    occasion: [],
  },
  {
    slug: 'chocolate-oatmeal-cookies',
    name: 'Chocolate Oatmeal Cookies',
    imageUrl: 'assets/images/cookies/chocolate-oatmeal-cookies.jpg',
    types: ['cookies'],
    flavors: ['chocolate', 'spiced'],
    occasion: [],
  },
  {
    slug: 'chocolate-peppermint-cookies',
    name: 'Chocolate Peppermint Cookies',
    imageUrl: 'assets/images/cookies/chocolate-peppermint-cookies.jpg',
    types: ['cookies'],
    flavors: ['chocolate', 'fresh'],
    occasion: [],
  },
  {
    slug: 'gingersnaps',
    name: 'Gingersnaps',
    imageUrl: 'assets/images/cookies/gingersnaps.jpg',
    types: ['cookies'],
    flavors: ['spiced'],
    occasion: [],
  },
  {
    slug: 'snickerdoodles',
    name: 'Snickerdoodles',
    imageUrl: 'assets/images/cookies/snickerdoodles.jpg',
    types: ['cookies'],
    flavors: ['spiced'],
    occasion: [],
  },
  {
    slug: 'xmas-cookies',
    name: 'Christmas Cookies',
    imageUrl: 'assets/images/cookies/xmas-cookies.jpg',
    types: ['cookies'],
    flavors: ['spiced', 'chocolate'],
    occasion: [],
  },
  {
    slug: 'pecan-pie',
    name: 'Pecan Pie',
    imageUrl: 'assets/images/pies/pecan-pie2.png',
    types: ['pie'],
    flavors: ['nutty'],
    occasion: [],
  },
  {
    slug: 'bourbon-pecan-pie',
    name: 'Bourbon Pecan Pie',
    imageUrl: 'assets/images/pies/bourbon-pecan-pie.jpg',
    types: ['pie'],
    flavors: ['nutty'],
    occasion: [],
  },
  {
    slug: 'key-lime-pie',
    name: 'Key Lime Pie',
    imageUrl: 'assets/images/pies/key-lime-pie.jpg',
    types: ['pie'],
    flavors: ['citrus', 'rich'],
    occasion: [],
  },
  {
    slug: 'apple-tart-tatin',
    name: 'Apple Tart Tatin',
    imageUrl: 'assets/images/tarts/apple-tart-tatin.jpg',
    types: ['tart'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'apple-tart',
    name: 'French Apple Tart',
    imageUrl: 'assets/images/tarts/apple-tart.jpg',
    types: ['tart'],
    flavors: ['fruity'],
    occasion: [],
  },
  {
    slug: 'chocolate-tart',
    name: 'Rich Chocolate Tart',
    imageUrl: 'assets/images/tarts/chocolate-tart.jpg',
    types: ['tart'],
    flavors: ['chocolate'],
    occasion: [],
  },
  {
    slug: 'fruit-tart',
    name: 'Fruit Tart with Shortbread Crust',
    imageUrl: 'assets/images/tarts/tart.jpg',
    types: ['tart'],
    flavors: ['fruity', 'fresh'],
    occasion: [],
  },
];

@Injectable({ providedIn: 'root' })
export class RecipesService {
  public getRecipes(): Observable<Recipe[]> {
    return of(RECIPES_DUMMY_DATA);
  }

  public getRecipe(slug?: string | null): Observable<Recipe | null> {
    if (!slug) {
      return of(null);
    }
    const recipe = RECIPES_DUMMY_DATA.find(
      (r) => r.slug?.toLowerCase().replace(/\s+/g, '-') === slug
    );
    return of(recipe || null);
  }
}

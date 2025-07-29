import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Recipe, SearchResult } from '../models';

const RECIPES_DUMMY_DATA: Recipe[] = [
  {
    slug: 'brownies',
    name: 'Brownies',
    imageUrl: 'assets/images/bars/brownies.png',
    categories: ['bars'],
    flavors: ['chocolate'],
    occasion: ['everyday', 'datenight', 'gifting', 'justbecause', 'party'],
    stepSections: [],
  },
  {
    slug: 'lemon-bars',
    name: 'Lemon Bars',
    imageUrl: 'assets/images/bars/lemon-bars.jpg',
    categories: ['bars'],
    flavors: ['citrus', 'rich'],
    occasion: ['brunch', 'gifting', 'holidays', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'millionaire-shortbread',
    name: 'Millionaire Shortbread',
    imageUrl: 'assets/images/bars/millionaire-shortbread.jpg',
    categories: ['bars'],
    flavors: ['chocolate', 'rich'],
    occasion: ['gifting', 'holidays', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    imageUrl: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    categories: ['cake'],
    occasion: ['birthday', 'party', 'datenight'],
    flavors: ['chocolate', 'fruity'],
    stepSections: [],
  },
  {
    slug: 'banana-bread',
    name: 'Banana Bread',
    imageUrl: 'assets/images/bread/banana-bread.png',
    categories: ['bread'],
    flavors: ['fruity'],
    occasion: ['brunch', 'everyday', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'banana-scones',
    name: 'Banana Scones',
    imageUrl: 'assets/images/breakfast/banana-scones.jpg',
    categories: ['breakfast'],
    flavors: ['fruity'],
    occasion: ['brunch', 'everyday', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'apple-cake',
    name: 'Apple Cake',
    imageUrl: 'assets/images/cakes/apple-cake.jpg',
    categories: ['cake'],
    flavors: ['fruity', 'spiced'],
    occasion: ['holidays'],
    stepSections: [],
  },
  {
    slug: 'banana-sheet-cake',
    name: 'Banana Sheet Cake',
    imageUrl: 'assets/images/cakes/banana-sheet-cake.jpg',
    categories: ['cake'],
    flavors: ['fruity'],
    occasion: ['party', 'brunch'],
    stepSections: [],
  },
  {
    slug: 'carrot-cake',
    name: 'Carrot Cake',
    imageUrl: 'assets/images/cakes/carrot-cake.jpg',
    categories: ['cake'],
    flavors: ['spiced'],
    occasion: ['party', 'birthday', 'holidays'],
    stepSections: [],
  },
  {
    slug: 'christmas-cake',
    name: 'Christmas Cake',
    imageUrl: 'assets/images/cakes/christmas-cake.jpg',
    categories: ['cake'],
    flavors: ['nutty', 'fruity'],
    occasion: ['holidays', 'gifting'],
    stepSections: [],
  },
  {
    slug: 'lemon-blueberry-cake',
    name: 'Lemon Blueberry Cake',
    imageUrl: 'assets/images/cakes/lemon-blueberry-cake.png',
    categories: ['cake'],
    flavors: ['citrus', 'fruity'],
    occasion: ['birthday', 'party', 'datenight'],
    stepSections: [],
  },
  {
    slug: 'pineapple-cake',
    name: 'Pineapple Cake',
    imageUrl: 'assets/images/cakes/pineapple-cake.jpg',
    categories: ['cake'],
    flavors: ['fruity'],
    occasion: ['gifting', 'brunch', 'party'],
    stepSections: [],
  },
  {
    slug: 'basque-cheesecake',
    name: 'Basque Cheesecake',
    imageUrl: 'assets/images/cheesecakes/basque-cheesecake.jpg',
    categories: ['cheesecake'],
    flavors: ['rich'],
    occasion: ['gifting', 'showstopper', 'holidays'],
    stepSections: [],
  },
  {
    slug: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    imageUrl: 'assets/images/cheesecakes/blueberry-cheesecake.jpg',
    categories: ['cheesecake'],
    flavors: ['fruity', 'rich'],
    occasion: ['birthday', 'holidays', 'datenight', 'showstopper', 'party'],
    stepSections: [],
  },
  {
    slug: 'cinnamon-toast-crunch-cheesecake',
    name: 'Cinnamon Toast Crunch Cheesecake',
    imageUrl: 'assets/images/cheesecakes/cheesecake.jpg',
    categories: ['cheesecake'],
    flavors: ['spiced', 'rich'],
    occasion: ['gifting', 'birthday', 'holidays', 'showstopper'],
    stepSections: [],
  },
  {
    slug: 'chocolate-chunk-cookies',
    name: 'Chocolate Chunk Cookies',
    imageUrl: 'assets/images/cookies/chocolate-chunk-cookies.jpg',
    categories: ['cookies'],
    flavors: ['chocolate'],
    occasion: ['everyday', 'justbecause', 'gifting', 'party'],
    stepSections: [],
  },
  {
    slug: 'chocolate-oatmeal-cookies',
    name: 'Chocolate Oatmeal Cookies',
    imageUrl: 'assets/images/cookies/chocolate-oatmeal-cookies.jpg',
    categories: ['cookies'],
    flavors: ['chocolate', 'spiced'],
    occasion: ['everyday', 'justbecause', 'gifting', 'party'],
    stepSections: [],
  },
  {
    slug: 'chocolate-peppermint-cookies',
    name: 'Chocolate Peppermint Cookies',
    imageUrl: 'assets/images/cookies/chocolate-peppermint-cookies.jpg',
    categories: ['cookies'],
    flavors: ['chocolate', 'fresh'],
    occasion: ['holidays', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'gingersnaps',
    name: 'Gingersnaps',
    imageUrl: 'assets/images/cookies/gingersnaps.jpg',
    categories: ['cookies'],
    flavors: ['spiced'],
    occasion: ['holidays', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'snickerdoodles',
    name: 'Snickerdoodles',
    imageUrl: 'assets/images/cookies/snickerdoodles.jpg',
    categories: ['cookies'],
    flavors: ['spiced'],
    occasion: ['everyday', 'justbecause', 'gifting', 'party'],
    stepSections: [],
  },
  {
    slug: 'xmas-cookies',
    name: 'Christmas Cookies',
    imageUrl: 'assets/images/cookies/xmas-cookies.jpg',
    categories: ['cookies'],
    flavors: ['spiced', 'chocolate'],
    occasion: ['holidays', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'pecan-pie',
    name: 'Pecan Pie',
    imageUrl: 'assets/images/pies/pecan-pie2.png',
    categories: ['pie'],
    flavors: ['nutty'],
    occasion: ['holidays', 'gifting'],
    stepSections: [],
  },
  {
    slug: 'bourbon-pecan-pie',
    name: 'Bourbon Pecan Pie',
    imageUrl: 'assets/images/pies/bourbon-pecan-pie.jpg',
    categories: ['pie'],
    flavors: ['nutty'],
    occasion: ['holidays', 'gifting'],
    stepSections: [],
  },
  {
    slug: 'key-lime-pie',
    name: 'Key Lime Pie',
    imageUrl: 'assets/images/pies/key-lime-pie.jpg',
    categories: ['pie'],
    flavors: ['citrus', 'rich'],
    occasion: ['holidays', 'gifting', 'justbecause'],
    stepSections: [],
  },
  {
    slug: 'apple-tart-tatin',
    name: 'Apple Tart Tatin',
    imageUrl: 'assets/images/tarts/apple-tart-tatin.jpg',
    categories: ['tart'],
    flavors: ['fruity'],
    occasion: ['holidays', 'datenight', 'brunch'],
    stepSections: [],
  },
  {
    slug: 'apple-tart',
    name: 'French Apple Tart',
    imageUrl: 'assets/images/tarts/apple-tart.jpg',
    categories: ['tart'],
    flavors: ['fruity'],
    occasion: ['datenight', 'brunch'],
    stepSections: [],
  },
  {
    slug: 'chocolate-tart',
    name: 'Rich Chocolate Tart',
    imageUrl: 'assets/images/tarts/chocolate-tart.jpg',
    categories: ['tart'],
    flavors: ['chocolate'],
    occasion: ['datenight'],
    stepSections: [],
  },
  {
    slug: 'fruit-tart',
    name: 'Fruit Tart with Shortbread Crust',
    imageUrl: 'assets/images/tarts/tart.jpg',
    categories: ['tart'],
    flavors: ['fruity', 'fresh'],
    occasion: ['brunch', 'datenight', 'gifting'],
    stepSections: [],
  },
];

@Injectable({ providedIn: 'root' })
export class RecipesService {
  constructor(private http: HttpClient) {}

  public getRecipes(): Observable<Recipe[]> {
    return of(RECIPES_DUMMY_DATA);
  }

  public searchRecipes(): Observable<SearchResult[]> {
    // Simulate a search operation
    return of(
      RECIPES_DUMMY_DATA.map((recipe) => ({
        slug: recipe.slug,
        name: recipe.name,
        category: 'recipes',
        imageUrl: recipe.imageUrl,
        link: `/recipe/${recipe.slug}`,
      }))
    );
  }

  getRecipe(slug: string): Observable<Recipe> {
    const url = `assets/recipes/${slug}.json`;
    return this.http.get<Recipe>(url).pipe(
      catchError((err) => {
        console.error(`Error loading recipe for slug: ${slug}`, err);
        return throwError(() => new Error('Recipe not found.'));
      })
    );
  }
}

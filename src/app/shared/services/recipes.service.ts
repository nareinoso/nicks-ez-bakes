import { Injectable } from '@angular/core';
import { Recipe } from '../models';
import { Observable, of } from 'rxjs';

const RECIPES: Recipe[] = [
  {
    name: 'Chocolate Cake',
    slug: 'chocolate-cake',
    type: 'Cakes',
    mainIngredient: 'Chocolate',
    occasion: 'Birthday',
    difficulty: 2,
    dateAdded: new Date(2022, 5, 3),
  },
  {
    slug: 'pumpkin-cupcakes',
    name: 'Pumpkin Cupcakes',
    type: 'Cupcakes',
    mainIngredient: 'Pumpkin',
    occasion: 'Halloween',
    difficulty: 2,
    dateAdded: new Date(2017, 10, 15),
  },
  {
    slug: 'pumpkin-pie',
    name: 'Pumpkin Pie',
    type: 'Pies',
    mainIngredient: 'Pumpkin',
    occasion: 'Thanksgiving',
    difficulty: 2,
    dateAdded: new Date(2010, 11, 9),
  },
  {
    slug: 'cranberry-orange-cookies',
    name: 'Cranberry Orange Cookies',
    type: 'Cookies',
    mainIngredient: 'Cranberry',
    occasion: 'Christmas',
    difficulty: 2,
    dateAdded: new Date(2020, 12, 7),
  },
  {
    slug: 'chocolate-raspberry-cake',
    name: 'Chocolate Raspberry Cake',
    type: 'Cookies',
    mainIngredient: 'Raspberry',
    occasion: "Valentine's Day",
    difficulty: 3,
    dateAdded: new Date(2023, 2, 14),
  },
  {
    slug: 'blueberry-muffins',
    name: 'Fudge Brownies',
    type: 'Brownies & Bars',
    mainIngredient: 'Chocolate',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2021, 8, 10),
  },
  {
    slug: 'caramel-sauce',
    name: 'Caramel Sauce',
    type: 'Sauces',
    mainIngredient: 'Sugar',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2018, 3, 22),
  },
  {
    slug: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    type: 'Cookies',
    mainIngredient: 'Chocolate Chips',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2015, 6, 18),
  },
  {
    slug: 'apple-cake',
    name: 'Apple Cake',
    type: 'Cakes',
    mainIngredient: 'Apple',
    occasion: 'Christmas',
    difficulty: 2,
    dateAdded: new Date(2019, 12, 24),
  },
  {
    slug: 'pecan-pie',
    name: 'Pecan Pie',
    type: 'Pies',
    mainIngredient: 'Pecan',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2018, 11, 1),
  },
  {
    name: 'Bourbon Pecan Pie',
    slug: 'bourbon-pecan-pie',
    type: 'Pies',
    mainIngredient: 'Bourbon',
    occasion: 'Thanksgiving',
    difficulty: 2,
    dateAdded: new Date(2019, 12, 22),
  },
  {
    name: 'Cake Pops',
    slug: 'cake-pops',
    type: 'Cakes',
    mainIngredient: 'Sprinkles',
    occasion: 'Birthday',
    difficulty: 2,
    dateAdded: new Date(2020, 5, 1),
  },
  {
    name: 'Salted Caramel Tart',
    slug: 'salted-caramel-tart',
    type: 'Tarts',
    mainIngredient: 'Caramel',
    occasion: '',
    difficulty: 3,
    dateAdded: new Date(2014, 8, 7),
  },
  {
    name: 'Key Lime Pie',
    slug: 'key-lime-pie',
    type: 'Pies',
    mainIngredient: 'Key Lime',
    occasion: 'Easter',
    difficulty: 2,
    dateAdded: new Date(2022, 12, 12),
  },
  {
    name: 'Blueberry Sauce',
    slug: 'blueberry-sauce',
    type: 'Sauces',
    mainIngredient: 'Blueberry',
    occasion: '',
    difficulty: 1,
    dateAdded: new Date(2023, 2, 9),
  },
  {
    name: 'Honey Butter',
    slug: 'honey-butter',
    type: 'Sauces',
    mainIngredient: 'Honey',
    occasion: '',
    difficulty: 1,
    dateAdded: new Date(2024, 9, 2),
  },
  {
    name: 'Chocolate Ganache',
    slug: 'chocolate-ganache',
    type: 'Sauces',
    mainIngredient: 'Chocolate',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2016, 4, 12),
  },
  {
    name: 'Lemon Curd',
    slug: 'lemon-curd',
    type: 'Sauces',
    mainIngredient: 'Lemon',
    occasion: '',
    difficulty: 1,
    dateAdded: new Date(2019, 3, 14),
  },
  {
    name: 'Lemon Bars',
    slug: 'lemon-bars',
    type: 'Brownies & Bars',
    mainIngredient: 'Lemon',
    occasion: '',
    difficulty: 2,
    dateAdded: new Date(2019, 3, 14),
  },
  {
    name: 'Cinnamon Toast Crunch Cheesecake',
    slug: 'cinnamon-toast-crunch-cheesecake',
    type: 'Cheesecake',
    mainIngredient: ' Cinnamon Toast Crunch',
    occasion: 'Easter',
    difficulty: 3,
    dateAdded: new Date(2024, 2, 20),
  },
  {
    name: 'Carrot Cake',
    slug: 'carrot-cake',
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

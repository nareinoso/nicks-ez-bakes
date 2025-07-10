import { Ingredient } from './ingredient.type';
import { Occasion } from './occasion.type';
import { RecipeType } from './recipe-type';

export interface Recipe {
  slug?: string; // Optional slug for routing
  imageUrl?: string; // Optional image URL for the recipe
  name: string;
  types?: RecipeType[];
  ingredients?: Ingredient[];
  occasion?: Occasion[];
}

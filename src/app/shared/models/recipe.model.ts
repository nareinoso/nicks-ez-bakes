import { Flavor } from './ingredient.type';
import { Occasion } from './occasion.type';
import { Category } from './category.type';

export interface Recipe {
  slug?: string; // Optional slug for routing
  imageUrl?: string; // Optional image URL for the recipe
  name: string;
  categories: Category[];
  flavors: Flavor[];
  occasion: Occasion[];
}

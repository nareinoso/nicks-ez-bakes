import { RecipeType } from './recipe-type';

export interface Recipe {
  slug?: string; // Optional slug for routing
  imageUrl?: string; // Optional image URL for the recipe
  name: string;
  type: RecipeType;
  mainIngredient: string;
  occasion: string;
  difficulty: number;
  dateAdded: Date;
}

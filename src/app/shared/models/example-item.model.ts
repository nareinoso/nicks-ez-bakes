import { RecipeType } from './recipe-type';

export interface Recipe {
  name: string;
  type: RecipeType;
  mainIngredient: string;
  occasion?: string;
  difficulty: number;
  dateAdded: Date;
}

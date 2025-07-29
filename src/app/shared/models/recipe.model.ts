import { Flavor } from './ingredient.type';
import { Occasion } from './occasion.type';
import { Category } from './category.type';

export interface Recipe {
  slug: string;
  imageUrl: string;
  name: string;
  categories: Category[];
  flavors: Flavor[];
  occasion: Occasion[];
  prepTime?: string;
  cookTime?: string;
  chillTime?: string;
  totalTime?: string;
  yield?: string;
  description?: string;
  credit?: string;
  ingredientSections: {
    label: string;
    items: {
      name: string;
      checked?: boolean;
    }[];
  }[];
  equipment?: {
    name: string;
    checked?: boolean;
  }[];
  stepSections: {
    label: string;
    steps: {
      text: string;
      checked?: boolean;
    }[];
  }[];
}

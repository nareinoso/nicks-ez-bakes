import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import { Recipe } from '../../shared/models';
import { RecipesService } from '../../shared/services/recipes.service';

const CATEGORY_OPTIONS = ['Bread', 'Breakfast', 'Cakes', 'Cookies', 'Tarts'];
const OCCASION_OPTIONS = ['Birthday', 'Holiday', 'Everyday'];
const INGREDIENT_OPTIONS = ['Chocolate', 'Fruit', 'Nuts', 'Vanilla'];

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  animations: [
    trigger('togglePanel', [
      state('hidden', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden <=> visible', animate('200ms ease-in-out')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  imports: [MatSelectModule, MatButtonModule, CommonModule],
})
export class RecipesComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipes';

  private recipesService: RecipesService = inject(RecipesService);

  recipes: Recipe[] = [];
  categories = CATEGORY_OPTIONS;
  occasions = OCCASION_OPTIONS;
  ingredients = INGREDIENT_OPTIONS;
  selectedCategory: string | null = null;
  selectedOccasion: string | null = null;
  selectedIngredient: string | null = null;
  showFilters: boolean = false;

  constructor(title: Title) {
    title.setTitle('Recipes | The Caffeinated Baker');
  }

  get panelState() {
    return this.showFilters ? 'visible' : 'hidden';
  }

  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  selectCategory(cat: string) {
    this.selectedCategory = this.selectedCategory === cat ? null : cat;
  }

  clearFilters() {
    this.selectedCategory = null;
    this.selectedOccasion = null;
    this.selectedIngredient = null;
  }
}

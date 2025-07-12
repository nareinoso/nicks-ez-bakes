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
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FilterOption,
  Occasion,
  Recipe,
  RecipeFilterType,
} from '../../shared/models';
import { RecipesService } from '../../shared/services/recipes.service';

const FILTER_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'bread', label: 'Bread' },
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'bars', label: 'Bars' },
  { key: 'cake', label: 'Cakes' },
  { key: 'cookies', label: 'Cookies' },
  { key: 'cheesecake', label: 'Cheesecakes' },
  { key: 'pie', label: 'Pies' },
  { key: 'tart', label: 'Tarts' },
];
const CATEGORY_OPTIONS = [
  'bars',
  'bread',
  'breakfast',
  'cake',
  'cheesecake',
  'cookies',
  'healthy',
  'pie',
  'sauce',
  'tart',
];
const FLAVOR_OPTIONS = [
  'chocolate',
  'fruity',
  'nutty',
  'spiced',
  'citrus',
  'rich',
  'fresh',
];
const OCCASION_OPTIONS: { key: Occasion; label: string }[] = [
  { key: 'brunch', label: 'Brunch' },
  { key: 'birthday', label: 'Birthdays' },
  { key: 'gifting', label: 'Gifting' },
  { key: 'holidays', label: 'Holidays' },
  { key: 'datenight', label: 'Date Night' },
  { key: 'everyday', label: 'Everyday Treats' },
  { key: 'showstopper', label: 'Showstoppers' },
  { key: 'party', label: 'Potlucks & Parties' },
  { key: 'justbecause', label: 'Just Because' },
];

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
  imports: [
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class RecipesComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipes';
  private recipesService: RecipesService = inject(RecipesService);
  private router = inject(Router);

  categoryList = CATEGORY_OPTIONS;
  occasionList = OCCASION_OPTIONS;
  flavorsList = FLAVOR_OPTIONS;
  categories = new FormControl<string[]>([]);
  occasions = new FormControl<string[]>([]);
  flavors = new FormControl<string[]>([]);

  filterPills: FilterOption[] = FILTER_OPTIONS;
  activePill: string = this.filterPills[0].key;
  showFilters: boolean = false;

  recipes: Recipe[] = [];

  constructor(title: Title, private route: ActivatedRoute) {
    title.setTitle('Recipes | The Caffeinated Baker');
  }

  get isPillActive() {
    return (key: string) => {
      if (key === 'all') return this.categories.value?.length === 0;
      return this.categories.value?.includes(this.toTitleCase(key));
    };
  }

  get panelState() {
    return this.showFilters ? 'visible' : 'hidden';
  }

  get categoriesAreSelected(): boolean {
    let categoriesVal = this.categories.value?.length;
    return categoriesVal ? categoriesVal > 0 : false;
  }

  get ingredientsAreSelected(): boolean {
    let ingredientsVal = this.flavors.value?.length;
    return ingredientsVal ? ingredientsVal > 0 : false;
  }

  get occasionsAreSelected(): boolean {
    let occasionsVal = this.occasions.value?.length;
    return occasionsVal ? occasionsVal > 0 : false;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category');
      if (category && this.categoryList.includes(category)) {
        this.categories.setValue([category]);
      }
    });

    this.recipesService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  selectPill(key: string) {
    this.activePill = key;

    if (key === 'all') {
      this.categories.setValue([]); // Clear if using pill-based filters
    } else {
      this.categories.setValue([this.toTitleCase(key)]);
    }
  }

  toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  clearFilter(filterType: RecipeFilterType) {
    switch (filterType) {
      case 'category':
        this.categories.reset();
        break;
      case 'ingredient':
        this.flavors.reset();
        break;
      case 'occasion':
        this.occasions.reset();
        break;
    }
  }

  get filteredRecipes(): Recipe[] {
    const categories = this.categories.value?.map(this.normalize) ?? [];
    const flavors = this.flavors.value?.map(this.normalize) ?? [];
    const occasions = this.occasions.value?.map(this.normalize) ?? [];

    return this.recipes.filter((recipe) => {
      const recipeCategories = recipe.categories?.map(this.normalize) ?? [];
      const recipeOccasion = this.normalize(String(recipe.occasion));
      const recipeIngredients =
        recipe.flavors?.map((ing: any) =>
          this.normalize(typeof ing === 'string' ? ing : ing.name ?? '')
        ) ?? [];

      const matchesCategory =
        !categories.length ||
        recipeCategories.some((cat) => categories.includes(cat));

      const matchesFlavor =
        !flavors.length ||
        flavors.some((ing) => recipeIngredients.includes(ing));

      const matchesOccasion =
        !occasions.length || occasions.includes(recipeOccasion);

      return matchesCategory && matchesFlavor && matchesOccasion;
    });
  }

  private normalize(value: string): string {
    return value?.trim().toLowerCase();
  }

  navigateToRecipe(slug: string) {
    this.router.navigateByUrl(`/recipe/${slug}`);
  }
}

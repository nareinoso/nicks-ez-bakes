import {
  Component,
  HostBinding,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RecipesService } from '../../../shared/services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeDetailsComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipe-details';
  private recipesService: RecipesService = inject(RecipesService);
  private readonly recipeSlug: string | null = null;

  constructor(
    public title: Title,
    private route: ActivatedRoute
  ) {
    title.setTitle('Recipes | The Caffeinated Baker');
    this.recipeSlug = this.route.snapshot.paramMap.get('slug');
  }

  public ngOnInit(): void {
    this.recipesService.getRecipe(this.recipeSlug)
      .subscribe({
        next:(recipe) => {
          if (recipe) {
            this.title.setTitle(`${recipe.name} | The Caffeinated Baker`);
          } else {
            this.title.setTitle('Recipe Not Found | The Caffeinated Baker');
          }
        },
        error: (err: any) => console.error('Error fetching recipe:', err)
      });
  }
}

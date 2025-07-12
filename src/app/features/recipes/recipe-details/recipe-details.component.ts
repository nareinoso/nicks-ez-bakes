import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../shared/models';
import { RecipesService } from '../../../shared/services';
import { SentenceCasePipe } from '../../../shared/pipes';

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    SentenceCasePipe,
  ],
})
export class RecipeDetailsComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipe-details';
  recipe: Recipe | null = null;

  constructor(
    public router: Router,
    public title: Title,
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {
    title.setTitle('Recipes | The Caffeinated Baker');
  }

  public ngOnInit(): void {
    this.getRecipeFromSlug();
  }

  saveRecipe(): void {
    //TODO
  }

  printRecipe(): void {
    window.print();
  }

  private getRecipeFromSlug(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;

    this.recipeService.getRecipe(slug).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
      },
      error: () => {
        // Log error
        console.log(`Recipe for slug: ${slug} not found.`);
      },
    });
  }
}

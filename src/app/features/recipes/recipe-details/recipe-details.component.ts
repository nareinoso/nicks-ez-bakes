import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../shared/models';
import { SentenceCasePipe } from '../../../shared/pipes';
import { RecipesService } from '../../../shared/services';

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
    MatCheckboxModule,
    FormsModule,
  ],
})
export class RecipeDetailsComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipe-details';
  recipe: Recipe | null = null;

  constructor(
    public router: Router,
    public title: Title,
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
        // Transform items into checkable objects
        recipe.ingredientSections = recipe.ingredientSections.map(
          (section) => ({
            ...section,
            items: section.items.map((item) => ({
              name: item.name,
              checked: false,
            })),
          })
        );

        recipe.equipment = recipe?.equipment?.map((item) => ({
          ...item,
          checked: false,
        }));

        recipe.stepSections = recipe.stepSections.map((section) => ({
          ...section,
          steps: section.steps.map((step) => ({
            text: typeof step === 'string' ? step : step.text,
            checked: false,
          })),
        }));

        this.recipe = recipe;
        this.title.setTitle(`${this.recipe?.name} | The Caffeinated Baker`);
        this.insertRecipeSchema(this.recipe);
      },
      error: () => {
        console.log(`Recipe for slug: ${slug} not found.`);
      },
    });
  }

  private insertRecipeSchema(recipe: Recipe) {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Recipe',
      name: recipe.name,
      description: recipe.description,
      image: [recipe.imageUrl],
      author: {
        '@type': 'Person',
        name: recipe.credit || 'The Caffeinated Baker',
      },
      prepTime: this.convertToISO8601Duration(recipe.prepTime),
      cookTime: this.convertToISO8601Duration(recipe.cookTime),
      totalTime: this.convertToISO8601Duration(recipe.totalTime),
      recipeYield: recipe.yield,
      recipeIngredient: recipe.ingredientSections,
      recipeInstructions: recipe?.stepSections?.map((stepSection) => ({
        '@type': 'HowToStep',
        text: stepSection.steps.join(' '),
      })),
    });
    this.renderer.appendChild(this.document.head, script);
  }

  private convertToISO8601Duration(timeStr: string | undefined): string {
    if (!timeStr) return '';
    const lower = timeStr.toLowerCase();

    const hourMatch = lower.match(/(\d+)\s*hour|hr|h/);
    const minMatch = lower.match(/(\d+)\s*minute|min|m/);

    const hours = hourMatch ? parseInt(hourMatch[1], 10) : 0;
    const minutes = minMatch ? parseInt(minMatch[1], 10) : 0;

    if (hours === 0 && minutes === 0) return ''; // or null

    return `PT${hours > 0 ? hours + 'H' : ''}${
      minutes > 0 ? minutes + 'M' : ''
    }`;
  }
}

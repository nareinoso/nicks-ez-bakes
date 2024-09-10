import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipesComponent {
  @HostBinding('class') readonly className = 'recipes';

  constructor(title: Title) {
    title.setTitle('Recipes | The Caffeinated Baker');
  }
}

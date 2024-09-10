import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  @HostBinding('class') readonly className = 'recipes';
}

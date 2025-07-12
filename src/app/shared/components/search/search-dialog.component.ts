import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipesService } from '../../services';

@Component({
  standalone: true,
  selector: 'ez-search',
  templateUrl: 'search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SearchDialogComponent {
  filters = [
    { label: 'Recipes', value: 'recipes' },
    { label: 'Learn', value: 'learn' },
    { label: 'Equipment', value: 'equipment' },
  ];

  results = [
    {
      title: 'Baking Basics',
      category: 'Learn',
      image: 'assets/images/learn/baking.jpg',
    },
    {
      title: 'Baking Sheet Set',
      category: 'Equipment',
      image: 'assets/images/equipment/baking-sheets.jpg',
    },
    {
      title: 'Banana Bread',
      category: 'Recipes',
      image: 'assets/images/bread/banana-bread.jpg',
    },
    {
      title: 'Bread Baking Guide',
      category: 'Learn',
      image: 'assets/images/bread/bread.jpg',
    },
    {
      title: 'Brownies',
      category: 'Recipes',
      image: 'assets/images/cookies/brownies.jpg',
    },
    {
      title: 'Cookie Decorating',
      category: 'Learn',
      image: 'assets/images/learn/cookie-decorating.jpg',
    },
    {
      title: 'Chocolate Chip Cookies',
      category: 'Recipes',
      image: 'assets/images/cookies/cookies.jpg',
    },
    {
      title: 'Cake Decorating Tips',
      category: 'Learn',
      image: 'assets/images/learn/decorating.jpg',
    },
    {
      title: 'Stand Mixer',
      category: 'Equipment',
      image: 'assets/images/equipment/mixer.jpg',
    },
    {
      title: 'Mixing Bowls',
      category: 'Equipment',
      image: 'assets/images/equipment/mixing-bowl.jpg',
    },
    {
      title: 'Oven Thermometer',
      category: 'Equipment',
      image: 'assets/images/equipment/thermometer.jpg',
    },
    {
      title: 'Pancakes',
      category: 'Recipes',
      image: 'assets/images/breakfast/pancakes.jpg',
    },
    {
      title: 'Pastry Techniques',
      category: 'Learn',
      image: 'assets/images/desserts/pastries.jpg',
    },
    {
      title: 'Rolling Pin',
      category: 'Equipment',
      image: 'assets/images/equipment/rolling-pins.jpg',
    },
    {
      title: 'Sourdough Bread',
      category: 'Recipes',
      image: 'assets/images/bread/sourdough.jpg',
    },
  ];
}

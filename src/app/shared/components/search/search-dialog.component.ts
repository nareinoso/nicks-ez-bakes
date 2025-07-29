import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchResult } from '../../models';
import { RecipesService } from '../../services';

const MOCK_RESULTS = [
  {
    slug: 'brownies',
    name: 'Fudgy Brownies',
    category: 'recipes',
    imageUrl: 'assets/images/bars/brownies.png',
    link: '/recipe/brownies',
  },
  {
    slug: 'banana-bread',
    name: 'Banana Bread',
    category: 'recipes',
    imageUrl: 'assets/images/bread/banana-bread.png',
    link: '/recipe/banana-bread',
  },
];

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
    RouterModule,
    ReactiveFormsModule,
    MatIcon,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SearchDialogComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  private router = inject(Router);
  private recipeService = inject(RecipesService);
  private readonly dialogRef = inject(MatDialogRef<SearchDialogComponent>);

  filters = [{ label: 'Recipes', value: 'recipes' }];
  searchControl = new FormControl('');
  activeFilter = 'recipes';
  searchResults: SearchResult[] = [];
  mockResults = MOCK_RESULTS;

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query: any) => this.performSearch(query));
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  performSearch(query: string | null): void {
    if (!query) {
      this.searchResults = [];
      return;
    }

    // Replace this with your real search logic
    this.recipeService
      .searchRecipes()
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((results: SearchResult[]) => {
        this.searchResults = results.filter((result) =>
          result.name.toLowerCase().includes(query.toLowerCase())
        );
      });
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.searchResults = [];
  }

  setActiveFilter(value: string): void {
    this.activeFilter = value;
    this.performSearch(this.searchControl.value || '');
  }

  goToLink(item: SearchResult): void {
    this.dialogRef.close(); // Close the dialog before navigating
    // Trick Angular into thinking the URL is different by navigating to root first
    switch (item.category) {
      case 'recipes':
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigateByUrl(`/recipe/${item.slug}`);
          });
        break;
      default:
        console.warn(
          `No navigation logic defined for category: ${item.category}`
        );
        this.router.navigateByUrl(`/not-found`);
        break;
    }
  }
}

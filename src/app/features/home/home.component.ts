import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FeaturedItem } from '../../shared/models';

const FEATURED_DUMMY: FeaturedItem[] = [
  {
    slug: 'banana-bread',
    image: 'assets/images/bread/banana-bread.png',
    name: 'Banana Bread',
  },
  {
    slug: 'banana-scones',
    image: 'assets/images/breakfast/banana-scones.jpg',
    name: 'Banana Scones',
  },
  {
    slug: 'blueberry-cheesecake',
    image: 'assets/images/cheesecakes/blueberry-cheesecake.jpg',
    name: 'Blueberry Cheesecake',
  },
  {
    slug: 'carrot-cake',
    image: 'assets/images/cakes/carrot-cake.jpg',
    name: 'Carrot Cake',
  },
  {
    slug: 'chocolate-chunk-cookies',
    image: 'assets/images/cookies/chocolate-chunk-cookies.jpg',
    name: 'Chocolate Chunk Cookies',
  },
  {
    slug: 'chocolate-raspberry-cake',
    image: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    name: 'Chocolate Raspberry Cake',
  },
  {
    slug: 'cinnamon-toast-crunch-cheesecake',
    image: 'assets/images/cheesecakes/cheesecake.jpg',
    name: 'Cinnamon Toast Crunch Cheesecake',
  },
  {
    slug: 'lemon-bars',
    image: 'assets/images/bars/lemon-bars.jpg',
    name: 'Lemon Bars',
  },
];

const QUICK_LINKS = [
  { name: 'Bread', icon: 'breakfast_dining', path: 'bread' },
  { name: 'Breakfast', icon: 'bakery_dining', path: 'breakfast' },
  { name: 'Brownies', icon: 'oven_gen', path: 'brownies' },
  { name: 'Cakes', icon: 'cake', path: 'cakes' },
  { name: 'Cookies', icon: 'cookie', path: 'cookies' },
  { name: 'Desserts', icon: 'icecream', path: 'desserts' },
  { name: 'Pies', icon: 'blur_circular', path: 'pies' },
  { name: 'Tarts', icon: 'nutrition', path: 'tarts' },
];

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MatIconModule, MatButtonModule, MatGridListModule, CommonModule],
})
export class HomeComponent {
  private router = inject(Router);

  @HostBinding('class') readonly className = 'home';

  public readonly featuredItems: FeaturedItem[] = FEATURED_DUMMY;
  public readonly quickLinks = QUICK_LINKS;

  constructor(title: Title) {
    title.setTitle('The Caffeinated Baker');
  }

  routeToRecipes(target: string): void {
    this.router.navigate(['/recipes'], { queryParams: { category: target } });
  }

  routeToRecipe(slug: string): void {
    this.router.navigate(['/recipe', slug]);
  }

  bookmarkItem(item: FeaturedItem, e: Event): void {
    // Here you would typically call a service to handle the bookmarking logic
    e.preventDefault();
    e.stopPropagation();
    item.isBookmarked = !item.isBookmarked;
  }
}

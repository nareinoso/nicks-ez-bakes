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
    slug: 'cinnamon-toast-crunch-cheesecake',
    image: 'assets/images/cakes/cheesecake.jpg',
    name: 'Cinnamon Toast Crunch Cheesecake',
  },
  {
    slug: 'blueberry-cheesecake',
    image: 'assets/images/cakes/blueberry-cheesecake.jpg',
    name: 'Blueberry Cheesecake',
  },
  {
    slug: 'baked-pear',
    image: 'assets/images/desserts/baked-pear.jpg',
    name: 'Baked Pear',
  },
  {
    slug: 'chocolate-raspberry-cake',
    image: 'assets/images/cakes/chocolate-raspberry-cake.jpg',
    name: 'Chocolate Raspberry Cake',
  },
  {
    slug: 'pecan-pie',
    image: 'assets/images/pies/pecan-pie2.jpg',
    name: 'Pecan Pie',
  },
  {
    slug: 'carrot-cake',
    image: 'assets/images/cakes/carrot-cake.jpg',
    name: 'Carrot Cake',
  },
  {
    slug: 'pineapple-upside-down-cake',
    image: 'assets/images/cakes/pineapple-cake.jpg',
    name: 'Pineapple Upside-Down Cake',
  },
  {
    slug: 'chocolate-chip-cookies',
    image: 'assets/images/cookies/xmas-cookies.jpg',
    name: 'Christmas Cookies',
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

  bookmarkItem(item: FeaturedItem): void {
    // Here you would typically call a service to handle the bookmarking logic
    item.isBookmarked = !item.isBookmarked;
  }
}

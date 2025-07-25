import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FeaturedItem } from '../../shared/models';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
  { name: 'Brownies', icon: 'oven_gen', path: 'bars' },
  { name: 'Cakes', icon: 'cake', path: 'cake' },
  { name: 'Cookies', icon: 'cookie', path: 'cookies' },
  { name: 'Desserts', icon: 'icecream', path: 'desserts' },
  { name: 'Pies', icon: 'blur_circular', path: 'pie' },
  { name: 'Tarts', icon: 'nutrition', path: 'tart' },
];

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    RouterModule,
  ],
  animations: [
    trigger('expandCollapse', [
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
          padding: '*',
          overflow: 'hidden',
        })
      ),
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          padding: '0px',
          overflow: 'hidden',
        })
      ),
      transition('expanded <=> collapsed', [animate('250ms ease-in-out')]),
    ]),
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  private router = inject(Router);

  @HostBinding('class') readonly className = 'home';

  public readonly featuredItems: FeaturedItem[] = FEATURED_DUMMY;
  public readonly quickLinks = QUICK_LINKS;

  isGreetingVisible = true;
  isMobileView = false;

  constructor(private titleService: Title, private metaService: Meta) {
    titleService.setTitle('The Caffeinated Baker');
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      'The Caffeinated Baker | Homemade Bakes & Recipes'
    );
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'A self-taught baker sharing comforting homemade treats, cakes, cookies, and more. Fresh recipes weekly.',
      },
      { name: 'author', content: 'Nick Reinoso' },
      {
        name: 'keywords',
        content:
          'baking, recipes, cookies, cakes, desserts, homemade, sweets, the caffeinated baker',
      },
    ]);

    this.checkViewport();
    window.addEventListener('resize', this.checkViewport.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkViewport.bind(this));
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 600;
  }

  toggleGreeting() {
    this.isGreetingVisible = !this.isGreetingVisible;

    if (!this.isGreetingVisible && this.isMobileView) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
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

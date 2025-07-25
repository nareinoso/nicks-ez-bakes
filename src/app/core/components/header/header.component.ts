import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '../../../../assets/fonts/font-awesome';
import { NavLink } from '../../models/nav-link.model';
import { SearchDialogComponent } from '../../../shared/components/search/search-dialog.component';

@Component({
  standalone: true,
  selector: 'ez-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule, CommonModule, MatButtonModule, FontAwesomeModule],
})
export class HeaderComponent {
  @HostBinding('class') readonly className = 'ez-header';
  readonly dialog = inject(MatDialog);
  private destroyed = new Subject<void>();
  isMobileView$ = new BehaviorSubject<boolean>(false);
  isScrolled = false;

  public navLinks: NavLink[] = [
    { label: 'Featured', path: '/home' },
    { label: 'Recipes', path: '/recipes' },
    // { label: 'Learn', path: '/learn' },
    // { label: 'Equipment', path: '/equipment' },
    { label: 'About', path: '/about' },
  ];

  private displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  constructor() {
    inject(BreakpointObserver)
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const breakpointName = this.displayNameMap.get(query) ?? 'Unknown';
            const isMobileView =
              breakpointName === 'XSmall' || breakpointName === 'Small';

            this.isMobileView$.next(isMobileView);
          }
        }
      });
  }

  public onSearchClick(): void {
    this.dialog.open(SearchDialogComponent, {
      height: '59rem',
      width: '100%',
      maxHeight: '90vh',
      maxWidth: '75rem',
      panelClass: 'search-dialog',
    });
  }
}

import {
  Injectable,
  OnDestroy,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeColor } from '../models';

// https://svenbudak.medium.com/how-to-implement-dark-light-mode-in-angular-mateiral-with-prefers-color-scheme-ce3e980e2ea5

const COLOR_SCHEME_PREFIX = 'color-scheme-';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  private _renderer: Renderer2;
  private _themeColor: ThemeColor = 'light';

  private readonly _isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this._isDarkMode.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  public ngOnDestroy(): void {
    this._isDarkMode.complete();
  }

  private _activeScheme() {
    return COLOR_SCHEME_PREFIX + this._themeColor;
  }

  private _inverseScheme() {
    return (
      COLOR_SCHEME_PREFIX + (this._themeColor === 'dark' ? 'light' : 'dark')
    );
  }

  private _getLocalStorageColor(): ThemeColor {
    return localStorage.getItem('prefers-color') as ThemeColor;
  }

  private _getPrefersColor(): ThemeColor {
    const canSupportColorSchemes =
      window.matchMedia('(prefers-color-scheme)').media !== 'not all';

    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return canSupportColorSchemes ? (isDarkMode ? 'dark' : 'light') : 'light';
  }

  private _setTheme(newTheme: ThemeColor) {
    this._renderer.removeClass(document.body, this._activeScheme());
    this._renderer.addClass(document.body, this._inverseScheme());
    localStorage.setItem('prefers-color', newTheme);
    this._themeColor = newTheme;
    this._isDarkMode.next(this._themeColor === 'dark');
  }

  public loadTheme() {
    this._themeColor = this._getLocalStorageColor() ?? this._getPrefersColor;
    this._isDarkMode.next(this._themeColor === 'dark');
    this._renderer.addClass(document.body, this._activeScheme());
  }

  public toggleTheme() {
    const inverseTheme = this._themeColor === 'dark' ? 'light' : 'dark';
    this._setTheme(inverseTheme);
  }
}

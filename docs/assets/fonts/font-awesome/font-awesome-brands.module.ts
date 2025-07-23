import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faAndroid,
  faApple,
  faChrome,
  faEdge,
  faFacebook,
  faFirefoxBrowser,
  faInstagram,
  faInternetExplorer,
  faLinkedin,
  faSafari,
  faTwitter,
  faWindows,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeBrandsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAndroid,
      faApple,
      faChrome,
      faEdge,
      faFirefoxBrowser,
      faInternetExplorer,
      faSafari,
      faWindows,
      faTwitter,
      faYoutube,
      faFacebook,
      faLinkedin,
      faInstagram
    );
  }
}

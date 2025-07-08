import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowUp,
  faBars,
  faDownload,
  faSearch,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeSolidModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDownload,
      faBars,
      faSearch,
      faXTwitter,
      faSort,
      faArrowUp,
      faArrowDown
    );
  }
}

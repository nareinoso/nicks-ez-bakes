import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCircle, faCopyright } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeRegularModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircle, faCopyright);
  }
}

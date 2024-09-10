import { NgModule } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { FontAwesomeBrandsModule } from './font-awesome-brands.module';
import { FontAwesomeRegularModule } from './font-awesome-regular.module';
import { FontAwesomeSolidModule } from './font-awesome-solid.module';

@NgModule({
  imports: [
    FontAwesomeBrandsModule,
    FontAwesomeRegularModule,
    FontAwesomeSolidModule,
  ],
  exports: [
    FontAwesomeBrandsModule,
    FontAwesomeRegularModule,
    FontAwesomeSolidModule,
  ],
})
export class FontAwesomeModule {
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fas';
    faConfig.fixedWidth = true;
  }
}

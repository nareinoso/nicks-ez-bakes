import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ez-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class LayoutComponent {
  @HostBinding('class') readonly className = 'ez-layout';
}

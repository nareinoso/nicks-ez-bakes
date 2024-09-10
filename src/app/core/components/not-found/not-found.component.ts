import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [HeaderComponent, RouterModule, MatButtonModule],
})
export class NotFoundComponent {
  @HostBinding('class') readonly className = 'not-found';

  constructor(title: Title) {
    title.setTitle('Error | The Caffeinated Baker');
  }
}

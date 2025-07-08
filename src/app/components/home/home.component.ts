import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MatIconModule, MatButtonModule, MatGridListModule],
})
export class HomeComponent {
  @HostBinding('class') readonly className = 'home';

  constructor(title: Title) {
    title.setTitle('The Caffeinated Baker');
  }
}

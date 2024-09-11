import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  @HostBinding('class') readonly className = 'home';

  constructor(title: Title) {
    title.setTitle('The Caffeinated Baker');
  }
}

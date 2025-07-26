import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
  @HostBinding('class') readonly className = 'about';

  constructor(title: Title) {
    title.setTitle('About | The Caffeinated Baker');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

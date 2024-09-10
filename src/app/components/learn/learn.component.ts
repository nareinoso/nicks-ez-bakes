import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LearnComponent {
  @HostBinding('class') readonly className = 'learn';

  constructor(title: Title) {
    title.setTitle('Learn | The Caffeinated Baker');
  }
}

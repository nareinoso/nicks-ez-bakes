import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LearnComponent {
  @HostBinding('class') readonly className = 'learn';
}

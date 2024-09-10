import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
  @HostBinding('class') readonly className = 'about';
}

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @HostBinding('class') readonly className = 'about';
}

import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  @HostBinding('class') readonly className = 'ez-home';
}

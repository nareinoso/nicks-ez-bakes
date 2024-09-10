import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @HostBinding('class') readonly className = 'ez-home';
}

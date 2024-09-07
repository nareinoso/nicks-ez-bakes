import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [HeaderComponent, RouterModule],
})
export class NotFoundComponent {
  @HostBinding('class') readonly className = 'not-found';
}

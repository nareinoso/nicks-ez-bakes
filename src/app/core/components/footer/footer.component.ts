import { CommonModule } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '../../../lib/font-awesome';

@Component({
  standalone: true,
  selector: 'ez-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @HostBinding('class') readonly className = 'ez-footer';
}

import { CommonModule } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '../../../../assets/fonts/font-awesome';

@Component({
  standalone: true,
  selector: 'ez-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
})
export class FooterComponent {
  @HostBinding('class') readonly className = 'ez-footer';
}

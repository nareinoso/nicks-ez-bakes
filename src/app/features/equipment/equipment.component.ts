import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EquipmentComponent {
  @HostBinding('class') readonly className = 'equipment';

  constructor(title: Title) {
    title.setTitle('Equipment | The Caffeinated Baker');
  }
}

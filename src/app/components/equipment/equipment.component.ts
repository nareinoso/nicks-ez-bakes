import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EquipmentComponent {
  @HostBinding('class') readonly className = 'equipment';
}

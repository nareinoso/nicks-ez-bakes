import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  @HostBinding('class') readonly className = 'equipment';
}

import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TableColumn, TableData } from '../../models';
import { TypeofPipe } from '../../pipes/typeof.pipe';

//https://medium.com/@bananicabananica/its-so-easy-with-angular-part-2-dynamic-tables-f4c0ab41f72f

@Component({
  standalone: true,
  selector: 'ez-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, TypeofPipe],
})
export class TableComponent {
  @HostBinding('class') readonly className = 'ez-table';

  public columns: TableColumn[] = [];
  @Input({ required: true }) public data: TableData = { columns: [], rows: [] };
}

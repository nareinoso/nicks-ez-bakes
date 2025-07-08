import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import _ from 'lodash';
import { FontAwesomeModule } from '../../../../assets/fonts/font-awesome';
import { TableColumn, TableData } from '../../models';
import { TypeofPipe } from '../../pipes/typeof.pipe';

//https://medium.com/@bananicabananica/its-so-easy-with-angular-part-2-dynamic-tables-f4c0ab41f72f

@Component({
  standalone: true,
  selector: 'ez-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, TypeofPipe, FontAwesomeModule],
})
export class TableComponent implements OnInit {
  @HostBinding('class') readonly className = 'ez-table';

  @Input({ required: true })
  public dataSource: TableData = { columns: [], rows: [] };
  private _modifiedDataSource: TableData = { columns: [], rows: [] };

  public ngOnInit(): void {
    this._modifiedDataSource = _.cloneDeep(this.dataSource);
  }

  public get modifiedDataSource(): TableData {
    return this._modifiedDataSource;
  }

  public toggleSort(column: TableColumn): void {
    if (!column.sortable) return;

    // Clear other columns sort state
    let otherColumns = this._modifiedDataSource.columns.filter(
      (c) => c !== column
    );
    otherColumns.forEach((c) => (c.sort = null));

    // Set target sort state: asc -> desc -> null
    switch (column.sort) {
      case 'asc':
        column.sort = 'desc';
        break;
      case 'desc':
        // Reset data source to original
        column.sort = null;
        this._modifiedDataSource = _.cloneDeep(this.dataSource);
        break;
      default:
        column.sort = 'asc';
    }

    this.sortRows(column);
  }

  private sortRows(column: TableColumn): void {
    if (!column.sort) return;
    this._modifiedDataSource.rows.sort((a, b) => {
      let valueA = a[column.key];
      let valueB = b[column.key];

      if (typeof valueA === 'string' || typeof valueB === 'string') {
        valueA = valueA?.toLowerCase().trim();
        valueB = valueB?.toLowerCase().trim();
      }

      if (valueA < valueB) {
        return column.sort === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return column.sort === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  public sortIcon(column: TableColumn): IconProp {
    switch (column.sort) {
      case 'asc':
        return ['fas', 'arrow-up'];
      case 'desc':
        return ['fas', 'arrow-down'];
      default:
        return ['fas', 'arrow-up'];
    }
  }
}

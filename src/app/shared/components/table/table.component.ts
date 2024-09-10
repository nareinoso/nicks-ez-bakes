import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ExampleItem, TableColumn, TableData } from '../../models';
import { TypeofPipe } from '../../pipes/typeof.pipe';
import { ExampleService } from '../../services/example.service';

//https://medium.com/@bananicabananica/its-so-easy-with-angular-part-2-dynamic-tables-f4c0ab41f72f

const EXAMPLE_COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'favoriteFood', label: 'Favorite Food' },
  { key: 'favoriteColor', label: 'Favorite Color' },
  { key: 'numberOfPets', label: 'Total # of Pets' },
  { key: 'dob', label: 'Birthday' },
];

@Component({
  standalone: true,
  selector: 'ez-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, TypeofPipe],
})
export class TableComponent implements OnInit {
  @HostBinding('class') readonly className = 'ez-table';
  private _exampleService: ExampleService = inject(ExampleService);

  public columns: TableColumn[] = EXAMPLE_COLUMNS;
  public exampleData: TableData = { columns: [], data: [] as ExampleItem[] };

  public ngOnInit(): void {
    this.exampleData.columns = this.columns;
    this.exampleData.data = this._exampleService.getExampleData();
  }
}

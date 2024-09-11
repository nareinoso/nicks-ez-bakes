import {
  Component,
  HostBinding,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TableComponent } from '../../shared/components/table/table.component';
import { TableData } from '../../shared/models';
import { ExampleService } from '../../shared/services/example.service';

const RECIPE_COLUMNS = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'mainIngredient', label: 'Main Ingredient', sortable: true },
  { key: 'occasion', label: 'Occasion', sortable: true },
  { key: 'difficulty', label: 'Difficulty', sortable: true },
  { key: 'dateAdded', label: 'Added', sortable: true },
];

@Component({
  standalone: true,
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [TableComponent],
})
export class RecipesComponent implements OnInit {
  @HostBinding('class') readonly className = 'recipes';
  private _exampleService: ExampleService = inject(ExampleService);
  public tableData: TableData = { columns: [], rows: [] };

  constructor(title: Title) {
    title.setTitle('Recipes | The Caffeinated Baker');
  }

  public ngOnInit(): void {
    this.tableData.columns = RECIPE_COLUMNS;
    this.tableData.rows = this._exampleService.getExampleData();
  }
}

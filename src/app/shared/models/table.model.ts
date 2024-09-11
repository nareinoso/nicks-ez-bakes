export declare type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  sort?: SortDirection;
}

export interface TableData {
  columns: TableColumn[];
  rows: any[];
}

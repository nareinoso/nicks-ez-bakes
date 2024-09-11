export interface TableColumn {
  key: string;
  label: string;
}

export interface TableData {
  columns: TableColumn[];
  rows: any[];
}

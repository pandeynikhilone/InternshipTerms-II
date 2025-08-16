export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean | "single"; // true = multi, "single" = radio
  onRowSelect?: (selectedRows: T[]) => void;
}

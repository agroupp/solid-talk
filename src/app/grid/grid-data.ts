import { ColDef } from "ag-grid-community";

export interface GridData {
  columnDefs: ColDef[];
  entities: unknown[];
}

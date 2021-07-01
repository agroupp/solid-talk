import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit, OnChanges {
  @Input() entities?: unknown[] | null;
  @Input() columns: string[] = [];

  columnDefs: ColDef[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.columns = this.columns?.length ? this.columns : Object.keys(this.entities?.[0] as any)
    this.columnDefs = this.columns.map(c => ({ field: c }));
  }
}

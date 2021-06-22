import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() entities?: unknown[] | null;
  @Input() columns: string[] = [];

  columnDefs: ColDef[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.columnDefs = this.columns.map(c => ({ field: c }));
  }
}

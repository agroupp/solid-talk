import { map, takeUntil, tap } from 'rxjs/operators';
import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { GridDataSource } from './datasource';
import { combineLatest, Subject } from 'rxjs';
import { GridApi, ColumnApi } from 'ag-grid-community';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective implements OnChanges, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  @Input() columns?: string[];

  private api$ = this.agGrid.gridReady.pipe(
    map(gridReady => ({ api: gridReady.api as GridApi, columnApi: gridReady.columnApi as ColumnApi }))
  );

  constructor(private readonly agGrid: AgGridAngular, private readonly dataSource: GridDataSource) {
    combineLatest([this.api$, dataSource.entities$]).pipe(
      tap(([api, entities]) => {
        if (entities?.length) {
          api.api.setRowData(entities);
          if (!this.columns?.length) {
            const columns = Object.keys(entities[0] as any);
            api.api.setColumnDefs(columns.map(c => ({ field: c })))
          }
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.columns?.currentValue?.length) {
      this.setColumnDefs(changes.columns.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private setColumnDefs(columns: string[]): void {
    if (!columns?.length) {
      return;
    }
    this.agGrid.columnDefs = columns.map(c => ({ field: c }));
  }
}

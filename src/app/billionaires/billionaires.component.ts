import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { tap } from 'rxjs/operators';

import { BillionairesService } from './state/billionaires.service';
import { BillionairesQuery } from './state/billionaires.query';
import { GridDataSource } from '../grid/datasource';

@Component({
  selector: 'app-billionaires',
  templateUrl: './billionaires.component.html',
  styleUrls: ['./billionaires.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillionairesComponent implements OnInit {
  readonly entities$ = this.billionairesQuery.entities$.pipe(
    tap(entities => {
      this.columns = Object.keys(entities?.[0] || {});
      this.columnDefs = this.columns.map(c => ({ field: c }))
    })
  );

  columnDefs: ColDef[] = [];
  columns: string[] = [];

  constructor(private readonly billionairesService: BillionairesService, private readonly billionairesQuery: BillionairesQuery) { }

  ngOnInit(): void {
    this.billionairesService.read().subscribe();
  }
}

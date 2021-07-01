import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GridDataSource } from '../grid/datasource';
import { HappinessQuery } from './state/happiness.query';

import { HappinessService } from './state/happiness.service';

const COLUMNS = [
  'countryName',
  'corruption',
  'gdp',
  'ladderScore',
] as const;

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HappinessComponent implements OnInit {
  readonly entities$ = this.happinessQuery.entities$;
  columns = COLUMNS;
  columnDefs: ColDef[] = COLUMNS.map(c => ({ field: c }));

  constructor(private readonly happinessService: HappinessService, private readonly happinessQuery: HappinessQuery) { }

  ngOnInit(): void {
    this.happinessService.read().subscribe();
  }
}

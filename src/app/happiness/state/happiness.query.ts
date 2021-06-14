import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HappinessState, HappinessStore } from './happiness.store';
import { ColDef } from 'ag-grid-community';

const columnDefs: ColDef[] = [
  { field: 'countryName' },
  { field: 'corruption' },
  { field: 'gdp' },
  { field: 'ladderScore' },
];

@Injectable({
  providedIn: 'root'
})
export class HappinessQuery extends QueryEntity<HappinessState> {
  readonly data$ = this.selectAll().pipe(
    map(entities => ({ entities, columnDefs }))
  );

  constructor(protected store: HappinessStore) {
    super(store);
  }
}

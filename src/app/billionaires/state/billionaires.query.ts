import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { GridDataSource } from '../../grid/datasource';
import { BillionairesState, BillionairesStore } from './billionaires.store';

@Injectable({
  providedIn: 'root'
})
export class BillionairesQuery extends QueryEntity<BillionairesState> {
  readonly entities$ = this.selectAll();

  constructor(protected store: BillionairesStore) {
    super(store);
  }
}

import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { BillionairesState, BillionairesStore } from './billionaires.store';

@Injectable({
  providedIn: 'root'
})
export class BillionairesQuery extends QueryEntity<BillionairesState> {
  readonly data$ = combineLatest([this.selectAll(), this.select('columnDefs')]).pipe(
    map(([ entities, columnDefs]) => ({ entities, columnDefs }))
  );

  constructor(protected store: BillionairesStore) {
    super(store);
  }
}

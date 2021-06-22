import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HappinessState, HappinessStore } from './happiness.store';

@Injectable({
  providedIn: 'root'
})
export class HappinessQuery extends QueryEntity<HappinessState> {
  readonly entities$ = this.selectAll();

  constructor(protected store: HappinessStore) {
    super(store);
  }
}

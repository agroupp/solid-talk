import { Injectable } from '@angular/core';
import { EntityState, EntityStore } from '@datorama/akita';
import { ColDef } from 'ag-grid-community';

import { HappinessCountry } from './happiness-country';

export interface HappinessState extends EntityState<HappinessCountry, string> {
  columnDefs: ColDef[];
}

@Injectable({
  providedIn: 'root'
})
export class HappinessStore extends EntityStore<HappinessState> {
  constructor() {
    super({ columnDefs: [] }, { name: 'Happiness', idKey: 'countryName' });
  }
}

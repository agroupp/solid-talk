import { Injectable } from '@angular/core';
import { EntityState, EntityStore } from '@datorama/akita';
import { ColDef } from 'ag-grid-community';

import { Billionaire } from './billionaire';

export interface BillionairesState extends EntityState<Billionaire, number> {
  columnDefs: ColDef[];
}

@Injectable({
  providedIn: 'root'
})
export class BillionairesStore extends EntityStore<BillionairesState> {
  constructor() {
    super({ columnDefs: [] }, { name: 'Billionaires' });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { BillionairesStore } from './billionaires.store';
import { Billionaire } from './billionaire';

@Injectable({
  providedIn: 'root'
})
export class BillionairesService {

  constructor(private http: HttpClient, private readonly store: BillionairesStore) { }

  read() {
    return this.http.get<Billionaire[]>(`/assets/billionaires.json`).pipe(
      tap(ent => {
        let entities = ent.slice(0, 10);
        entities = entities.map((e: Billionaire, index: number) => ({ ...e, id: index}));
        this.store.set(entities);
      })
    );
  }
}

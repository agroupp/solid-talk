import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HappinessCountry } from './happiness-country';
import { HappinessStore } from './happiness.store';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  constructor(private http: HttpClient, private readonly store: HappinessStore) { }

  read() {
    return this.http.get<HappinessCountry[]>(`/assets/happiness.json`).pipe(
      tap(ent => this.store.set(ent))
    );
  }
}

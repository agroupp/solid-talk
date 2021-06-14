import { Component, OnInit } from '@angular/core';
import { HappinessQuery } from './state/happiness.query';

import { HappinessService } from './state/happiness.service';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.scss']
})
export class HappinessComponent implements OnInit {
  readonly data$ = this.happinessQuery.data$;
  constructor(private readonly happinessService: HappinessService, private readonly happinessQuery: HappinessQuery) { }

  ngOnInit(): void {
    this.happinessService.read().subscribe();
  }

}

import { Component, OnInit } from '@angular/core';

import { BillionairesService } from './state/billionaires.service';
import { BillionairesQuery } from './state/billionaires.query';

@Component({
  selector: 'app-billionaires',
  templateUrl: './billionaires.component.html',
  styleUrls: ['./billionaires.component.scss']
})
export class BillionairesComponent implements OnInit {
  readonly data$ = this.billionairesQuery.data$;

  constructor(private readonly billionairesService: BillionairesService, private readonly billionairesQuery: BillionairesQuery) { }

  ngOnInit(): void {
    this.billionairesService.read().subscribe();
  }
}

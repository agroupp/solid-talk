import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { BillionairesComponent } from './billionaires.component';

const routes: Route[] = [
  { path: '', component: BillionairesComponent }
];

@NgModule({
  declarations: [
    BillionairesComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes),
  ]
})
export class BillionairesModule { }

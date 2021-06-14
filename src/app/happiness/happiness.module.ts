import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { HappinessComponent } from './happiness.component';

const routes: Route[] = [
  { path: '', component: HappinessComponent }
];

@NgModule({
  declarations: [
    HappinessComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes),
  ]
})
export class HappinessModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { GridModule } from '../grid/grid.module';
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
    GridModule,
    RouterModule.forChild(routes),
  ]
})
export class BillionairesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { GridModule } from '../grid/grid.module';
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
    GridModule,
    RouterModule.forChild(routes),
  ]
})
export class HappinessModule { }

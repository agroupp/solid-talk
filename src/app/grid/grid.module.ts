import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridDirective } from './grid.directive';



@NgModule({
  declarations: [
    GridComponent,
    GridDirective
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [GridComponent, GridDirective]
})
export class GridModule { }

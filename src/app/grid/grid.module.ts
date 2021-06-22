import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [GridComponent]
})
export class GridModule { }

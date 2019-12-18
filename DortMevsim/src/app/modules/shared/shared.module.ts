import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCellComponent } from './components/grid-cell/grid-cell.component';



@NgModule({
  declarations: [GridCellComponent],
  imports: [
    CommonModule
  ],
  exports: [GridCellComponent]
})
export class SharedModule { }

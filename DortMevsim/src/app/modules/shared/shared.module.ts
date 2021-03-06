import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCellComponent } from './components/grid-cell/grid-cell.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalHostDirective } from 'src/app/core/directives/modal-host.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GridCellComponent, ModalComponent, ModalHostDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule, GridCellComponent, ModalComponent]
})
export class SharedModule { }

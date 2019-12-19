import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryService } from './services/category.service';
import { SharedModule } from '../shared/shared.module';
import { GridCellComponent } from '../shared/components/grid-cell/grid-cell.component';
import { CategoryUpsertComponent } from './components/category-upsert/category-upsert.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryUpsertComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    AgGridModule.withComponents([GridCellComponent])
  ],
  providers: [CategoryService],
  entryComponents: [CategoryUpsertComponent]
})
export class CategoryModule { }

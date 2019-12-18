import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [CategoryService]
})
export class CategoryModule { }

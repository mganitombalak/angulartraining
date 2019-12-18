import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';
import { GridCellComponent } from 'src/app/modules/shared/components/grid-cell/grid-cell.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Display Order', field: 'displayOrder' },
    { headerName: 'Active', field: 'isActive' },
    { headerName: 'Action', width: 250, cellRendererFramework: GridCellComponent }
  ];

  rowData: Array<ICategory>;
  context: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.context = { componentParent: this };
  }
  ngAfterViewInit(): void {
    this.categoryService.findAll().pipe(take(1)).subscribe(r => this.rowData = r.data);
  }

  onEditClicked(data: ICategory): void {
    console.log(`${data.name} is editing`);
  }
  onDeleteClicked(data: ICategory): void {
    console.log(`${data.name} is deleting`);
  }
  onInfoClicked(data: ICategory): void {
    console.log(`${data.name} is showing info`);
  }
}

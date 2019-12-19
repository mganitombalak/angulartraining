import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';
import { GridCellComponent } from 'src/app/modules/shared/components/grid-cell/grid-cell.component';
import { ModalService } from 'src/app/modules/shared/services/modal.service';
import { CategoryUpsertComponent } from '../category-upsert/category-upsert.component';

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
  constructor(private categoryService: CategoryService, private modalService: ModalService) { }

  ngOnInit() {
    this.context = { componentParent: this };
  }
  ngAfterViewInit(): void {
    this.categoryService.findAll().pipe(take(1)).subscribe(r => this.rowData = r.data);
  }

  onEditClicked(obj: ICategory): void {
    this.modalService.open({
      title: `Edit ${obj.name}`,
      activeComponent: CategoryUpsertComponent,
      componentMode: ComponentMode.Edit,
      data: obj
    });
  }
  onDeleteClicked(data: ICategory): void {
    console.log(`${data.name} is deleting`);
  }
  onInfoClicked(data: ICategory): void {
    console.log(`${data.name} is showing info`);
  }
}

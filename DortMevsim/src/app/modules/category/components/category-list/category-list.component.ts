import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Display Order', field: 'displayOrder' },
    { headerName: 'Active', field: 'isActive' }
  ];

  rowData: Array<ICategory>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.categoryService.findAll().pipe(take(1)).subscribe(r => this.rowData = r.data);
  }
}

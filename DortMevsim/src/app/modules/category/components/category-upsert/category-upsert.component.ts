import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from 'src/app/core/common/BaseModalComponent';
import { ICategory } from 'src/app/core/models/ICategory';

@Component({
  selector: 'app-category-upsert',
  templateUrl: './category-upsert.component.html',
  styleUrls: ['./category-upsert.component.css']
})
export class CategoryUpsertComponent extends BaseModalComponent<ICategory> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {

  }

  onSubmit(): void {

  }

}

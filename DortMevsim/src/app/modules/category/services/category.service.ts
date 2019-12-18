import { Injectable } from '@angular/core';
import { BaseCrudService } from 'src/app/core/common/BaseCrudService';
import { ICategory } from 'src/app/core/models/ICategory';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService extends BaseCrudService<ICategory> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.serviceEndPoint = 'category';
  }
}

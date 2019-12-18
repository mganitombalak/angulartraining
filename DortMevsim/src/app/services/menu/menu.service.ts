import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/core/models/IResponse';
import { IMenuItem } from 'src/app/core/models/IMenuItem';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  findAll(): Array<IMenuItem> {//Observable<IResponse<IMenuItem>> {
  return [{ title: 'Kategori', url: '/category' },{ title: 'Birimler', url: '/units' },]; //this.httpClient.get('menu') as Observable<IResponse<IMenuItem>>;
}
}

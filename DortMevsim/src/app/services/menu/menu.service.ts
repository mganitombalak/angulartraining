import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private httpClient: HttpClient) { }
  findAll(): void {
    this.httpClient.get('178.128.248.160:81/api/menu');
  }
}

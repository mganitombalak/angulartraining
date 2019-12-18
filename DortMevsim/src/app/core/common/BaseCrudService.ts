import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/IResponse';

export class BaseCrudService<T> {

    protected serviceEndPoint: string;

    constructor(protected httpClient: HttpClient) { }
    findAll(): Observable<IResponse<T>> {
        return this.httpClient.get(this.serviceEndPoint) as Observable<IResponse<T>>;
    }

    create(data: FormData) {

    }

    update(data: FormData) {

    }
}
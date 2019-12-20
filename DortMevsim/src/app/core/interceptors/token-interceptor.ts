import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private globalSettings: GlobalService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestObject = req.clone({
            url: `${this.globalSettings.getBaseUrl() + req.url}`,
            headers: req.headers
                .set('Content-Type', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        });
        return next.handle(requestObject);
    }
}

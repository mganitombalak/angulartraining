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
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQ5NjVjNmM5LTM3YmYtNDVjYi05NmJlLTliNmQ0Y2FjY2Y1MCIsImVtYWlsIjoiaWxoYW5AZ3JhdHVkZS5jb20iLCJyb2xlIjoibnVsbCIsIm5iZiI6MTU3NjY3Mzg3OCwiZXhwIjoxNTc2Njc0Nzc4LCJpYXQiOjE1NzY2NzM4Nzh9.cYHZ9HWYa6vlBJfuS-ertPSGqPcWDi5rShbxeCN6aoY`)
        });
        return next.handle(requestObject);
    }
}

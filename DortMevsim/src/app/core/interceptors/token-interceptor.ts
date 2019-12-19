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
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQ5NjVjNmM5LTM3YmYtNDVjYi05NmJlLTliNmQ0Y2FjY2Y1MCIsImVtYWlsIjoiaWxoYW5AZ3JhdHVkZS5jb20iLCJyb2xlIjoibnVsbCIsIm5iZiI6MTU3Njc1NjY5OCwiZXhwIjoxNTc2NzU3NTk4LCJpYXQiOjE1NzY3NTY2OTh9.Q2H4eaCbcjheeYIgwYfo1zHUu5tBAIjirjf4IELF16U`)
        });
        return next.handle(requestObject);
    }
}

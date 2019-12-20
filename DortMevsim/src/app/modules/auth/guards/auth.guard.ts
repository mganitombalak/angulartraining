import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanLoad,
    Route,
    UrlSegment,
    CanActivateChild
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {// , CanActivateChild
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        activeRouter: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        return this.router.createUrlTree(['/auth']);
    }
    // canActivateChild(
    //     childRoute: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     if (this.authService.isAuthenticated()) {
    //         return true;
    //     }
    //     return this.router.createUrlTree(['/auth']);
    // }
    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated();
    }
}

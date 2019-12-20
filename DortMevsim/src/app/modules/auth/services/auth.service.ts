import { Injectable } from '@angular/core';
import { IAuth } from 'src/app/core/models/IAuth';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from 'src/app/core/models/IAuthResponse';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  onAuthStatusChanged: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.onAuthStatusChanged = new BehaviorSubject(false);
  }

  login(userData: IAuth): void {
    this.httpClient.post('auth', userData).subscribe((r: IAuthResponse) => {
      localStorage.setItem('token', r.token);
      localStorage.setItem('userdata', JSON.stringify(r.data));
      this.onAuthStatusChanged.next(true);
    });
  }

  logout(): void {
    localStorage.clear();
    this.onAuthStatusChanged.next(false);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

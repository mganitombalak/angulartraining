import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  buttonText = 'Login';
  authChangeSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authChangeSubscription = this.authService.onAuthStatusChanged
      .subscribe(r => this.buttonText = (r ? 'Logout' : 'Login'));
  }

  loginLogout(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
      return;
    }
    this.router.navigate(['/auth']);
  }
  ngOnDestroy(): void {
    this.authChangeSubscription.unsubscribe();
  }
}

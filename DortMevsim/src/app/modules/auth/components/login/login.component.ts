import { Component, OnInit } from '@angular/core';
import { IAuth } from 'src/app/core/models/IAuth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: IAuth = { password: '', username: '' };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.authService.login(this.model);
  }

}

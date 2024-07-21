import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).then(response => {
      localStorage.setItem('access_token', response.data.access_token);
      this.router.navigate(['/list-pdfs']);
    }).catch(error => {
      alert('Erreur');
    });
  }
}


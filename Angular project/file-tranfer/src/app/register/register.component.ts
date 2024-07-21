import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  matricule = '';
  name = '';
  surname = '';
  email = '';
  password = '';
  field = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register({
      matricule: this.matricule,
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      field: this.field
    }).then(response => {
      alert('Profile créer avec succès');
      this.router.navigate(['/login']);
    }).catch(error => {
      alert('Erreur lors la creation du profile');
    });
  }
}

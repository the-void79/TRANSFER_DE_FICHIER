import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    matricule: '',
    name: '',
    surname: '',
    email: '',
    field: ''
  };

  constructor(private authService: AuthService) { }

  updateProfile() {
    this.authService.updateProfile(this.profile).then(response => {
      alert('Profile mise a jour');
    }).catch(error => {
      alert('Erreur lors de la mise a jour');
    });
  }
}


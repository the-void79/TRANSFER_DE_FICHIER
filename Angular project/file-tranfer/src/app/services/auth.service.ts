import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:8000/api';

  login(email: string, password: string) {
    return axios.post(`${this.API_URL}/login`, { email, password });
  }

  register(data: any) {
    return axios.post(`${this.API_URL}/create-profile`, data);
  }

  updateProfile(data: any) {
    const token = localStorage.getItem('access_token');
    return axios.put(`${this.API_URL}/update-profile`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

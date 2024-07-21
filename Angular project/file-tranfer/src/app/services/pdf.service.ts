import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private API_URL = 'http://localhost:8000/api';

  upload(data: any) {
    const token = localStorage.getItem('access_token');
    return axios.post(`${this.API_URL}/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });
  }

  getPdfs() {
    const token = localStorage.getItem('access_token');
    return axios.get(`${this.API_URL}/pdfs`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  deletePdf(id: number) {
    const token = localStorage.getItem('access_token');
    return axios.delete(`${this.API_URL}/pdfs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

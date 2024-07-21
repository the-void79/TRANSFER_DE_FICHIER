import { Component } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  title = '';
  module = '';
  field = '';
  date = '';
  file: File | null = null;

  constructor(private pdfService: PdfService) { }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('module', this.module);
    formData.append('field', this.field);
    formData.append('date', this.date);
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }

    this.pdfService.upload(formData).then(response => {
      alert('PDF telecharger avec succès');
    }).catch(error => {
      alert('Erreur lors du téléchargement');
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-list-pdfs',
  templateUrl: './list-pdfs.component.html',
  styleUrls: ['./list-pdfs.component.css']
})
export class ListPdfsComponent implements OnInit {
  pdfs: any[] = [];

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    this.loadPdfs();
  }

  loadPdfs() {
    this.pdfService.getPdfs().then(response => {
      this.pdfs = response.data;
    }).catch(error => {
      alert('Erreur');
    });
  }

  deletePdf(id: number) {
    this.pdfService.deletePdf(id).then(response => {
      alert('PDF supprimer avec succès');
      this.loadPdfs();
    }).catch(error => {
      alert('Erreur lors de la suppression');
    });
  }
}

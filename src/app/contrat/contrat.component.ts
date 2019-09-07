import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
 
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 downloadPDF(){
    console.log('downloading pdf ...');
     
const doc =new jsPDF();
 
doc.text('Hello world!', 15, 15);
 
doc.save('contrat.pdf')
 
  }
}

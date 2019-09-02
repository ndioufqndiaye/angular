import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenairelist',
  templateUrl: './partenairelist.component.html',
  styleUrls: ['./partenairelist.component.scss']
})
export class PartenairelistComponent implements OnInit {

 partenaires = [];

  constructor(private _partenaireservice: PartenaireService) { }

  ngOnInit() {
    this._partenaireservice.getPartenaire()
    
    .subscribe(
      res => this.partenaires = res,
      err => console.log(err)
    );
  }
 
}

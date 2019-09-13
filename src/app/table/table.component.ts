import { Component,  OnInit, ViewChild } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Partenaire {
  id: number;
  matricule: string;
  nomPartenaire: string;
  NINEA: string;
  email: string;
  Adresse: string;
  telephone: number;
  Status: string;
  }
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'matricule','nomPartenaire', 'NINEA','email', 'Adresse','telephone', 'Status'];
dataSource: MatTableDataSource<Partenaire>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
entreprise = []
constructor(private _partenaire: PartenaireService) { }

ngOnInit() {
this. _partenaire.getPartenaire()
.subscribe(
res => {
this.entreprise = res
this.dataSource = new MatTableDataSource(this.entreprise);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
},
err => console.log(err),
)
}
applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();
}
}
}



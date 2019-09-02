import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  users = [];
  //private _bloquerUrl= "http://localhost:8000/api/bloquer";

  constructor(private _userservice: PartenaireService,
              private http: HttpClient
    ) { }

  ngOnInit() {
    this._userservice.getUser()
    
    .subscribe(
      res => this.users = res,
      err => console.log(err)
    );
  }
 /* bloquerUser(bloquer){
    
    return this.http.get<any>(this._bloquerUrl,bloquer)
   }*/
}

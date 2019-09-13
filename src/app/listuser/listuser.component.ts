import { Component,ViewChild, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  users = [];

 
  constructor(private _userservice: PartenaireService,
              private _bloservice: PartenaireService,
              private http: HttpClient) { }

  ngOnInit(){
    
    
    
    this._userservice.getUser()
    
    .subscribe(
      res => this.users = res,
      err => console.log(err)
    );
  }
  
  bloquerUser(id){

    this._bloservice.monitor(id).subscribe(

      res=>{
        console.log(res)
        this.ngOnInit();
      }, 
      err=>console.log(err)
    );
   }
}

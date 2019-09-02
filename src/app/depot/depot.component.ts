import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  DepotCompteData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  depotCompte() {

    this._auth.depotCompte(this.DepotCompteData)
    .subscribe(
      res => {
        
        localStorage.setItem('token', res.token)
        this._router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }

}

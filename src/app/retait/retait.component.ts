import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-retait',
  templateUrl: './retait.component.html',
  styleUrls: ['./retait.component.scss']
})
export class RetaitComponent implements OnInit {

  RetraitArgent = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  OnSubmit(data) {

    console.log(data)
    this._auth.RetraitArgent(data)
    .subscribe(
    data =>{
      console.log(data);
     
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Envoi réussie!!!',
        showConfirmButton: false,
        timer: 1500
      })
      
    },

    error=>{
      console.log(error)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Parametre incorrect!',
        footer: '<a href>Saisir les bons identifiant ?</a>'
      })
    }
   )
   }
}

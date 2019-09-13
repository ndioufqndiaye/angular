import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginUserData= {}
  jwt = new JwtHelperService;
  message :  any;
  nom :  any;
  prenom :  any;
  imageName : any;
  roles: any;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){

    this._auth.loginUser(this.loginUserData)

 .subscribe(
   res => {
     console.log(res);
     
    localStorage.setItem('token', res.token);
    const Decode=this.jwt.decodeToken(res.token);
    localStorage.setItem('username', Decode.username);
    localStorage.setItem('roles', Decode.roles[0]);
    localStorage.setItem('nom', Decode.nom);
    localStorage.setItem('prenom', Decode.prenom);
    localStorage.setItem('expiration', Decode.exp);
    localStorage.setItem('imageName', Decode.imageName);
    this.prenom= res.prenom;
    this.imageName= res.imageName;
    this.nom= res.nom;
     Swal.fire('authentification reussie')

     this._router.navigate(['/user'])
   },
   err => {
    localStorage.setItem('message',err.message)
    this.message=err.message
   }
 )
}

}

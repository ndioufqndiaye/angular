import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginUserData= {}
       message: string;
       username: string
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){

    this._auth.loginUser(this.loginUserData)

 .subscribe(
   res => {
     localStorage.setItem('token',res.token)
     Swal.fire('authentification reussie')

     this._router.navigate(['/user'])
   },
   err => {
    localStorage.setItem('message',err.message)
    this.message=err.message
   }
 )
}

/*isAdmin() {

  return this._auth.isAdmin();

}
isUser() {

  return this._auth.isUser();

}
isSuperAdmin() {
  return this._auth.isSuperAdmin();
}*/

}

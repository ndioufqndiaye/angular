import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  title = 'projet2';
  constructor(private _auth: AuthService,
    private _router: Router) { }

    logoutUser() {

      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('roles')
      localStorage.removeItem('nom')
      localStorage.removeItem('prenom')
      localStorage.removeItem('expiration')
      localStorage.removeItem('imageName')
      
      this._router.navigate(['/login'])
      
    }
  
  isAdmin() {

    return this._auth.isAdmin();
  
  }
  isUser() {

    return this._auth.isUser();
  
  }
  isSuperAdmin() {
    return this._auth.isSuperAdmin();
  }
  isCaissier() {
    return this._auth.isCaissier();
  }

  isAuthentificated(){
    return this._auth.isAuthentificated();
  }
}

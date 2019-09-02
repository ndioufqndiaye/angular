import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet2';
  constructor(
    private _router: Router) { }
    
  logoutUser() {

    localStorage.removeItem('token')
    this._router.navigate(['/login'])
    
  }
}

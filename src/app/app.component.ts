import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet2';
  constructor(private _auth: AuthService,
    private _router: Router) { }
    
  
 /* isAuthentificated(){
    return this._auth.isAuthentificated();
  }*/
}

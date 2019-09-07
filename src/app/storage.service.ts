import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept(req, next){

    let authService=this.injector.get(AuthService)
    const headers=new HttpHeaders;
    headers.append('content-type', 'application/json');

    let tokenizedReq=req.clone({
   
      headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
    
    })
    return next.handle(tokenizedReq)
    
  }
}


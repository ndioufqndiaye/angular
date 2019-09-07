import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//private _userUrl= "http://localhost:8000/api/user";
private _loginUrl= "http://localhost:8000/api/login";
private _compteUrl= "http://localhost:8000/api/compte";
private _depotUrl= "http://localhost:8000/api/depot";
private urlretrait= "http://localhost:8000/api/retrait";

   jwt: string;
   username: string;
   roles:Array<string>;
  constructor(private http: HttpClient,
              private _router: Router) { }

//private header= { headers:new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('token')) }

  ajoutUser(User){
    const endpoint = 'http://localhost:8000/api/user';
    const formData: FormData = new FormData();
    formData.append('matricule',User.matricule);
    formData.append('prenom',User.prenom);
    formData.append('nom',User.nom);
    formData.append('adresse',User.adresse);
    formData.append('telephone',User.telephone);
    formData.append('status',User.status);
    formData.append('email',User.email);
    formData.append('username',User.username);
    formData.append('roles',User.roles);
    formData.append('password',User.password);
    formData.append('partenaire_id',User.partenaire);
    formData.append('compte_id',User.compte);
    formData.append('imageName',User.imageName);

    return this.http.post(endpoint, formData);
   //return this.http.post<any>(this._userUrl, user)
  }
 
  loginUser(user){
    
    console.log(user)

    return this.http.post<any>(this._loginUrl, user)
   }
   
   compteUser(compte){
    
    return this.http.post<any>(this._compteUrl, compte)
   }

   depotCompte(depot){  
    return this.http.post<any>(this._depotUrl, depot)
   }
   EnvoiArgent(envoi){
    const endpoin = 'http://localhost:8000/api/envoi';
    const formData: FormData = new FormData();
    formData.append('nom',envoi.nom);
    formData.append('prenom',envoi.prenom);
    formData.append('telephone',envoi.telephone);
    formData.append('montant',envoi.montant);
    formData.append('agence',envoi.agence);
    formData.append('nomben',envoi.nomben);
    formData.append('prenomben',envoi.prenomben);
    formData.append('telephoneben',envoi.telephoneben);
    formData.append('type',envoi.type);
    

    return this.http.post(endpoin, formData);
   //return this.http.post<any>(this._userUrl, user)
  }
  RetraitArgent(retrait){

      console.log(retrait);
      return this.http.post<any>(this.urlretrait,retrait);
 
  }
   logged(){

     return !!localStorage.getItem('token')
   }
   
   getToken(){

    return localStorage.getItem('token')
   }

  /* saveToken(jwt :string){
    localStorage.setItem('token',jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();
}*/
   parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    console.log(objJWT)
    this.username = objJWT.username;
    console.log(this.username)
    this.roles = objJWT.roles;
    console.log(this.roles)
    
   }

/*loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

   isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;

}
isSuperAdmin() {
    return this.roles.indexOf('ROLE_SUPER_ADMIN') >= 0;

}
isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
}
isAuthentificated() {
    return this.roles 
}*/
}

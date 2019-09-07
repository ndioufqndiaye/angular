import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private _listetUlr= "http://localhost:8000/api/lister";
  private _listetUser= "http://localhost:8000/api/listeruser";

  constructor(private http: HttpClient) { }

  getPartenaire(){
    return this.http.get<any>(this._listetUlr) 
  }
  getUser(){
    return this.http.get<any>(this._listetUser) 
  }

  monitor(id){

  const   _bloquerUser= 'http://localhost:8000/api/bloque/'+id;

    return this.http.get(_bloquerUser) 
  }

  ajoutPartenaire(Partenaire){
    const endpoint = 'http://localhost:8000/api/partenaire';
    const formData: FormData = new FormData();
    formData.append('matricule',Partenaire.matricule);
    formData.append('prenom',Partenaire.prenom);
    formData.append('nom',Partenaire.nom);
    formData.append('adresse',Partenaire.adresse);
    formData.append('telephone',Partenaire.telephone);
    //formData.append('status',User.status);
    formData.append('email',Partenaire.email);
    formData.append('username',Partenaire.username);
    formData.append('roles',Partenaire.roles);
    formData.append('password',Partenaire.password);
    formData.append('nomPartenaire',Partenaire.nomPartenaire);
    formData.append('NINEA',Partenaire.NINEA);
    formData.append('imageName',Partenaire.imageName);

    return this.http.post(endpoint, formData);
   //return this.http.post<any>(this._userUrl, user)
  }
}

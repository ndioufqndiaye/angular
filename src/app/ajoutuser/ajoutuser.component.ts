import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ajoutuser',
  templateUrl: './ajoutuser.component.html',
  styleUrls: ['./ajoutuser.component.scss']
})
export class AjoutuserComponent implements OnInit {

imgUrl: string="/assets/img/model1.jpg";

//fileToUploade: File=null;

  ajoutUserData = {imageName: File=null}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

   handleFileInput(file: FileList){
    this.ajoutUserData.imageName= file.item(0);

     var reader= new FileReader();
     reader.onload= (event:any) =>{
       this.imgUrl=event.target.result;
     }
     reader.readAsDataURL(this.ajoutUserData.imageName);
   }

  ajoutUser() {
    this._auth.ajoutUser(this.ajoutUserData)
    .subscribe(

      res => {console.log(res)},
      err => console.log(err)
      /*res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/login'])
      },*/
      
    )      
  }
}
import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-ajoutpartenaire',
  templateUrl: './ajoutpartenaire.component.html',
  styleUrls: ['./ajoutpartenaire.component.scss']
})
export class AjoutpartenaireComponent implements OnInit {

  imgUrl: string="/assets/img/model1.jpg";

//fileToUploade: File=null;

  ajoutPartenaireData = {imageName: File=null}
  constructor(private _part: PartenaireService) { }

  ngOnInit() {
  }

   handleFileInput(file: FileList){
    this.ajoutPartenaireData.imageName= file.item(0);

     var reader= new FileReader();
     reader.onload= (event:any) =>{
       this.imgUrl=event.target.result;
     }
     reader.readAsDataURL(this.ajoutPartenaireData.imageName);
   }

  ajoutPartenaire() {
    this._part.  ajoutPartenaire(this.ajoutPartenaireData)
    .subscribe(

      res => {console.log(res)},
      err => console.log(err)
        
    )      
  }

}

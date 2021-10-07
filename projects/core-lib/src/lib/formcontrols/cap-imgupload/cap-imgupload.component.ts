import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Authorize } from '../../services/authorize';
import { environment } from './enviroment';

@Component({
  selector: 'cap-imgupload',
  templateUrl: './cap-imgupload.component.html',
  styleUrls: ['./cap-imgupload.component.css']
})
export class CapImguploadComponent {
  imgURL: any = '';
  hidden: any = 'display: none';
  
  constructor(private http: HttpClient){ }

  @Authorize()
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    const fileReader: FileReader = new FileReader();

    if(file){
      fileReader.onload = (e) =>{
        this.imgURL = e.target?.result;
        this.hidden = '';
      };
      fileReader.readAsDataURL(file);
      
      const formData = new FormData();
      formData.append("image", file);


      const upload$ = this.http.post(environment.url + "/api/v1/images", formData);
      upload$.subscribe((data)=>{
        //Data es el uuid de la imagen que hemos subido
      });
    }
  }

  deleteFile(){
    this.imgURL = '';
    this.hidden = 'display: none'
  }
}

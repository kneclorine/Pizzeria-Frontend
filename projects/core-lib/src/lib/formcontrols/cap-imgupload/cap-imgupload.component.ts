import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
        //Que se hace con el uuid
      });
    }
  }

  deleteFile(){
    this.imgURL = '';
    this.hidden = 'display: none'
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cap-imgupload',
  templateUrl: './cap-imgupload.component.html',
  styleUrls: ['./cap-imgupload.component.css']
})
export class CapImguploadComponent {
  imgURL: any = '';
  
  constructor(private http: HttpClient){ }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    const fileReader: FileReader = new FileReader();

    if(file){
      fileReader.onload = (e) =>{
        this.imgURL = e.target?.result;
      };
      fileReader.readAsDataURL(file);
      
      const formData = new FormData();
      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/v1/images/", formData);
      upload$.subscribe((data)=>{
        //Obtener uuid
      });
    }
  }
}

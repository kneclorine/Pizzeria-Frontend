import { Injectable } from '@angular/core';
import { Cloudinary} from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
     cloudName: process.env.cloud_name
  }
});

@Injectable({
  providedIn: 'root'
})

export class CloudinaryService {

  static url(publicId: string, ext: string){
    return cld.image(`${publicId}.${ext}`);
  }
}

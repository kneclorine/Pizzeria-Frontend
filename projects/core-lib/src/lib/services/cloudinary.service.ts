import { Injectable } from '@angular/core';
import { Cloudinary} from '@cloudinary/url-gen';

import { cloud_name } from '../config/config';

const cld = new Cloudinary({
  cloud: {
     cloudName: cloud_name
  }
});

@Injectable({
  providedIn: 'root'
})

export class CloudinaryService {

  static getImageUrl(publicId: string, ext: string): string{
    return cld.image(`${publicId}.${ext}`).toURL();
  }
}

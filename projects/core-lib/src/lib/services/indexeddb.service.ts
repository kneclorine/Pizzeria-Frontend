import { Injectable } from '@angular/core';
import { del, get, set } from 'idb-keyval';

@Injectable({
  providedIn: 'root'
})

export class IndexeddbService{
  private  key: string = 'user';

  async addUser( data: any) {
     await set(this.key, data);
  }

  async getUser() {
    return await get(this.key);
  }

  async removeUser() {
    await del(this.key);
  }
} 

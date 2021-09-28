import { Injectable } from '@angular/core';
import {openDB } from 'idb';
/*
 //IndexedDB
declare let db: any;

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {
  private storagename = "TokensDB";
  constructor() { }

  add(keyname: any, value: any) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction(["TokensDB"], "readwrite")
          .objectStore("TokensDB").put(keyname, value);
        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success")
            resolve("success")
          } else {
            console.log("error")
            resolve(false);
          }
        }
      }
    });
  }

  get (keyname: any) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction(["TokensDB"], "readwrite")
          .objectStore("TokensDB").get(keyname);
        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success")
            resolve("success")
          } else {
            console.log("error")
            resolve(false);
          }
        }
      }
    });
  }

  delete (keyname: any) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction(["TokensDB"], "readwrite")
          .objectStore("TokensDB").delete(keyname);
        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success")
            resolve("success")
          } else {
            console.log("error")
            resolve(false);
          }
        }
      }
    });
  }
}*/
//export default new IndexeddbService();
// IDB Jake Archibald
class IndexeddbService{
  constructor(){}
    createDB(database: string, ...stores: string[]) {
    openDB(database, 1, {
        upgrade(db) {
            stores.forEach(
                store => db.createObjectStore(store)
            );
        },
    });
  }

  async addItem(database: string, store: string, data: any, key: string) {
    const db = await openDB(database, 1);
    db.add(store, data, key).catch(err => console.log('Error:', err));
    db.close();
  }

  async getItem(database: string, store: string, key: string) {
    const db = await openDB(database, 1);
    db.get(store, key).then(console.log);
    db.close();
  }

  async clearStore(database: string, store: string) {
    const db = await openDB(database, 1);
    db.clear(store);
    db.close();
  }
}
export default new IndexeddbService;

import { Injectable } from '@angular/core';
import {openDB } from 'idb';

 //IndexedDB
declare let db: any;

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {
  public storagename = "TokensDB";
  constructor() { }

  add(keyname: any, value: any) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).put(keyname, value);
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
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).get(keyname);
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
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).delete(keyname);
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
}

// IDB Jake Archibald
export function createDB(database: string, ...stores: string[]) {
  openDB(database, 1, {
      upgrade(db) {
          stores.forEach(
              store => db.createObjectStore(store)
          );
      },
  });
}

export async function addItem(database: string, store: string, data: any, key: string) {
  const db = await openDB(database, 1);
  db.add(store, data, key).catch(err => console.log('Error:', err));
  db.close();
}

export async function getItem(database: string, store: string, key: string) {
  const db = await openDB(database, 1);
  db.get(store, key).then(console.log);
  db.close();
}

export async function clearStore(database: string, store: string) {
  const db = await openDB(database, 1);
  db.clear(store);
  db.close();
} 

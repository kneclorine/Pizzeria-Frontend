 //TODO Leave or remove
//IndexedDB
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDb || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB) {
    alert("Your browser does not support indexedDB.")
}

let db = '';
 db = event.target.result;
let request = window.indexedDB.open("TokensDB",1);

request.onerror = function (event) {
    console.log("error "+event.target.result)
}

request.onsuccess = function(event) {
    db = request.result;
    console.log("success "+ db)
}

request.onupgradeneeded = function(event) {
    let db;
    let objectStore = db.createObjectStore("TokensDB")
}

//LOCALBASE (manera fácil indexeddb)<-
//import Localbase from 'localbase'
let dbL = new Localbase('db');

dbL.collection('tokens').add({
    id: 1,
    name: 'Bill',
    age: 47
})

dbL.collection('tokens').get().thend(tokens =>{
    console.log(tokens)
})

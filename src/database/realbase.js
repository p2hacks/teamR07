//import firebase from "firebase";
import { database } from "./Firebase.js";


export function name(id) { 
    //database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().name)} )
    return database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().name)} )
}
export function url(id) { 
    database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().url)} )
}
export function image(id) { 
    database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().image)} )
}
export function description(id) { 
    database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().description)} )
}
export function latitude(id) { 
    database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().latitude)} )
}
export function longitude(id) { 
    database.ref('/0/church/' + id).once('value').then((data) => { console.log(data.val().longitude)} )
}

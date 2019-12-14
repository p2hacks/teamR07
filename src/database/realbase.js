//import firebase from "firebase";
import database from "./Firebase.js";


export function name(id) { 
    return database.ref('/' + id).once('name',function(snapshot){
        console.log('name', snapshot.val())
    });
}
export function url(id) { 
    return database.ref('/' + id).once('url',function(snapshot){
        console.log('url', snapshot.val())
    });
}
export function image(id) { 
    return database.ref('/' + id).once('image',function(snapshot){
        console.log('imade', snapshot.val())
    });
}
export function description(id) { 
    return database.ref('/' + id).once('description',function(snapshot){
        console.log('description', snapshot.val())
    });
}
export function latitude(id) { 
    return database.ref('/' + id).once('latitude', function (snapshot) { 
        console.log('latitude', snapshot.val())
    })
}
export function longitude(id) { 
    return database.ref('/' + id).once('longitude',function(snapshot){
        console.log('longitude', snapshot.val())
    });
}

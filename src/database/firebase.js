import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEf-zy5Fy6cAaagU8Vkbpx5RUFrgje4ZI",
    authDomain: "p2hacks-d2186.firebaseapp.com",
    databaseURL: "https://p2hacks-d2186.firebaseio.com",
    projectId: "p2hacks-d2186",
    storageBucket: "p2hacks-d2186.appspot.com",
    messagingSenderId: "74641658098",
    appId: "1:74641658098:web:f23f6402b7c473a6a0c06b",
    measurementId: "G-RWV5SFW22N"
};

export default firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database();
export const storage = firebase.storage();


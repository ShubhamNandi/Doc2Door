import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    
  
    apiKey: "AIzaSyCn5UpVdWEcGyKgoaZhrxteNORal9c3Aw0",
    authDomain: "doc2dooremaillist.firebaseapp.com",
    databaseURL: "https://doc2dooremaillist.firebaseio.com",
    projectId: "doc2dooremaillist",
    storageBucket: "doc2dooremaillist.appspot.com",
    messagingSenderId: "938465471125",
    appId: "1:938465471125:web:6c9952be6cff8aab4a899c"
  
  
  
});

var db = firebaseApp.firestore();


export {db}
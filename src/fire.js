import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyACOimZRn0kH2sG6cSVpCboik-_2AiFavY",
    authDomain: "hilleducation-35f3a.firebaseapp.com",
    databaseURL: "https://hilleducation-35f3a.firebaseio.com",
    projectId: "hilleducation-35f3a",
    storageBucket: "hilleducation-35f3a.appspot.com",
    messagingSenderId: "196436984639"
  };
var fire = firebase.initializeApp(config);
export default fire;
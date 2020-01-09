import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCZRz_6LhR-xcGBsmwtaw_lgCVx6PBkcD8",
    authDomain: "photowall-e1276.firebaseapp.com",
    databaseURL: "https://photowall-e1276.firebaseio.com",
    projectId: "photowall-e1276",
    storageBucket: "photowall-e1276.appspot.com",
    messagingSenderId: "540956548149",
    appId: "1:540956548149:web:df4bd24bb51bd58c"
  };


firebase.initializeApp(firebaseConfig)


const database = firebase.database()
export {database}
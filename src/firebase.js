import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBN7i4BTX2_KweGnnxkqf3QmX0qhBG9lnU",
    authDomain: "login-760e6.firebaseapp.com",
    projectId: "login-760e6",
    storageBucket: "login-760e6.appspot.com",
    messagingSenderId: "386373162829",
    appId: "1:386373162829:web:33f77d4c4773ea85a88904"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
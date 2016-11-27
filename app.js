(function () {

console.log('running');

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyALoaZbdgD5TZ42Qjw-Nvxr3ZkOREfcVa4",
    authDomain: "drew-6b7c9.firebaseapp.com",
    databaseURL: "https://drew-6b7c9.firebaseio.com",
    storageBucket: "drew-6b7c9.appspot.com",
    messagingSenderId: "839701325426"
  };
  firebase.initializeApp(config);

  //get element
  const preObject = document.getElementById('07740163508');
  
  //create reference
  const dbRefObject = firebase.database().ref().child('07740163508');
  
  //sync object changes
  dbRefObject.on('value', snap => {

  preObject.innerText=JSON.stringify(snap.val(),null,3);
});

}());
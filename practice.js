
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCVMHblvDPQJHdYqSzCdaASygHqZsWU8Tw",
    authDomain: "chatwave3707.firebaseapp.com",
    databaseURL: "https://chatwave3707-default-rtdb.firebaseio.com",
    projectId: "chatwave3707",
    storageBucket: "chatwave3707.appspot.com",
    messagingSenderId: "1072487062137",
    appId: "1:1072487062137:web:0bb97349d90003b35252a8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function AddUser() {

    user_name =  document.getElementById("user_name").value;
    
    firebase.database().ref("/").child(user_name).update({
        purpose : "Adding User"
    });

}
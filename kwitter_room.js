var firebaseConfig = {
      apiKey: "AIzaSyA7zPav30JVinvTiYbe6Skn9TRnX1_MRNU",
      authDomain: "pingugod-kwitter.firebaseapp.com",
      databaseURL: "https://pingugod-kwitter-default-rtdb.firebaseio.com",
      projectId: "pingugod-kwitter",
      storageBucket: "pingugod-kwitter.appspot.com",
      messagingSenderId: "375998279092",
      appId: "1:375998279092:web:a2feb88bd243e10a7956e1",
      measurementId: "G-8SXXV3302M"
    };
firebase.initializeApp(firebaseConfig)   
    // Initialize Firebase
username=localStorage.getItem("username")
document.getElementById("username").innerHTML="Welcome"+username

function addroom(){
room_name=document.getElementById("roomname").value 
firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
})
localStorage.setItem("room_name", room_name)
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function redirecttoroomname(name){
localStorage.setItem("room_name", name)
 window.location="kwitter_page.html" 
}